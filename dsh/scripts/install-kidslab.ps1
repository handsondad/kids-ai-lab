<#
.SYNOPSIS
    Install the kids AI lab plugins (知识库模式 and 实验模式) into a DSH profile.
.DESCRIPTION
    Installs dsh/packages/dsh-kids-kb (the kb/ knowledge base: shared service, kb_* tools, library skills,
    知识库模式) and dsh/packages/dsh-kids-lab (实验模式: science museum and experiment workshop) into the DSH
    profile (default: kids-ai-lab), and writes the kb/ and sci-playground paths into that profile's own
    cordis.patch.yml. Rerun it after changing either package: DSH installs a copy. Restart DSH Web afterwards.
.PARAMETER ProfileName
    DSH profile to install into. Use an existing profile name to add 实验模式 beside its other modes.
.PARAMETER PlaygroundRoot
    sci-playground checkout. Defaults to the sci-playground folder next to this repository.
.PARAMETER ModelsFrom
    Another profile whose model provider rows (llm-pi-ai, agent-default-model) are copied when this profile has none.
#>
param(
    [string]$ProfileName = "kids-ai-lab",
    [string]$PlaygroundRoot = "",
    [string]$ModelsFrom = ""
)

$ErrorActionPreference = "Stop"
$REPO_ROOT = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
$KB_PLUGIN_DIR = Join-Path $REPO_ROOT "dsh\packages\dsh-kids-kb"
$PLUGIN_DIR = Join-Path $REPO_ROOT "dsh\packages\dsh-kids-lab"
$KB_ROOT = Join-Path $REPO_ROOT "kb"
if ([string]::IsNullOrWhiteSpace($PlaygroundRoot)) {
    $PlaygroundRoot = Join-Path (Split-Path $REPO_ROOT -Parent) "sci-playground"
}
if (!(Test-Path (Join-Path $PlaygroundRoot "src\catalog\games.ts"))) {
    Write-Host "sci-playground not found at $PlaygroundRoot; the playground tools will say it is not configured. Pass -PlaygroundRoot to fix." -ForegroundColor Yellow
    $PlaygroundRoot = ""
}
$HOME_DIR = $env:USERPROFILE
$DSH_HOME_DIR = if ([string]::IsNullOrWhiteSpace($env:DSH_HOME)) {
    Join-Path $HOME_DIR ".dsh"
} elseif ($env:DSH_HOME -eq "~") {
    $HOME_DIR
} elseif ($env:DSH_HOME.StartsWith("~/") -or $env:DSH_HOME.StartsWith("~\")) {
    Join-Path $HOME_DIR $env:DSH_HOME.Substring(2)
} else {
    $env:DSH_HOME
}
$DSH_HOME_DIR = [System.IO.Path]::GetFullPath($DSH_HOME_DIR)
$PROFILE_DIR = Join-Path $DSH_HOME_DIR "profiles\$ProfileName"

if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js LTS (>= 24) is required."
}
if ([int]((node --version).TrimStart("v").Split(".")[0]) -lt 24) {
    throw "Node.js >= 24 is required."
}
if (!(Get-Command dsh -ErrorAction SilentlyContinue)) {
    npm.cmd install -g @deepseek-ai/dsh@0.2.0-rc.2
    if ($LASTEXITCODE -ne 0) {
        throw "Installing DeepSeek Harness failed."
    }
}
if ((dsh --version).Trim() -ne "0.2.0-rc.2") {
    throw "The kids lab plugin is tested with DSH 0.2.0-rc.2; the existing DSH installation was not changed."
}

$created = $false
if (!(Test-Path (Join-Path $PROFILE_DIR "package.json"))) {
    dsh --profile $ProfileName --from-default-profile web --dump-config | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Initializing the DSH Web profile $ProfileName failed."
    }
    $created = $true
}

# The knowledge-base package first: the 实验模式 preset mounts its tools row and reads its kidsKb service.
foreach ($dir in @($KB_PLUGIN_DIR, $PLUGIN_DIR)) {
    dsh plugin --profile $ProfileName add --force "file:$($dir -replace '\\', '/')"
    if ($LASTEXITCODE -ne 0) {
        throw "Installing $dir into the DSH profile failed."
    }
}

$configArgs = @((Join-Path $PSScriptRoot "profile-config.js"), $PROFILE_DIR, $KB_ROOT, $PlaygroundRoot)
if ($created) { $configArgs += "--select-default" }
if (![string]::IsNullOrWhiteSpace($ModelsFrom)) { $configArgs += @("--models-from", (Join-Path $DSH_HOME_DIR "profiles\$ModelsFrom")) }
$written = node @configArgs | ConvertFrom-Json
if ($LASTEXITCODE -ne 0) {
    throw "Writing the kb/ and sci-playground paths into $PROFILE_DIR\cordis.patch.yml failed."
}

$dump = (dsh --profile $ProfileName --dump-config) -join "`n"
foreach ($row in @("kids-kb", "preset-kidskb", "kids-lab-settings", "preset-kidslab")) {
    if ($LASTEXITCODE -ne 0 -or $dump -notmatch $row) {
        throw "The profile $ProfileName does not compose $row; check $PROFILE_DIR\cordis.patch.yml."
    }
}

Write-Host "知识库模式 installed from: $KB_PLUGIN_DIR" -ForegroundColor Green
Write-Host "实验模式 installed from: $PLUGIN_DIR" -ForegroundColor Green
Write-Host "Knowledge base: $($written.kbRoot)" -ForegroundColor Green
Write-Host "sci-playground: $(if ($written.playgroundRoot) { $written.playgroundRoot } else { '(not configured)' })" -ForegroundColor Green
if ($written.copied.Count -gt 0) { Write-Host "Model rows copied from $ModelsFrom`: $($written.copied -join ', ')" -ForegroundColor Green }
Write-Host "Experiment pages are created in the workspace chosen for the session, under kids-lab/." -ForegroundColor Yellow
Write-Host "For 知识库模式, open the session in $REPO_ROOT so the file tools can write kb/ cards." -ForegroundColor Yellow
Write-Host "Restart DSH Web, then choose 实验模式 or 知识库模式 in a new session. Start it with:" -ForegroundColor Yellow
Write-Host "  dsh --profile $ProfileName --port 3090" -ForegroundColor White
