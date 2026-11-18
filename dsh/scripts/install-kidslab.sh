#!/usr/bin/env bash
# Install the kids AI lab plugins (知识库模式 and 实验模式) into a DSH profile. See install-kidslab.ps1 for the full description.
#   bash dsh/scripts/install-kidslab.sh [--profile NAME] [--playground DIR] [--models-from PROFILE]
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
KB_PLUGIN_DIR="$REPO_ROOT/dsh/packages/dsh-kids-kb"
PLUGIN_DIR="$REPO_ROOT/dsh/packages/dsh-kids-lab"
KB_ROOT="$REPO_ROOT/kb"
PROFILE_NAME="kids-ai-lab"
PLAYGROUND_ROOT="$(cd "$REPO_ROOT/.." && pwd)/sci-playground"
MODELS_FROM=""
while [ $# -gt 0 ]; do
  case "$1" in
    --profile) PROFILE_NAME="$2"; shift 2 ;;
    --playground) PLAYGROUND_ROOT="$2"; shift 2 ;;
    --models-from) MODELS_FROM="$2"; shift 2 ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done
if [ ! -f "$PLAYGROUND_ROOT/src/catalog/games.ts" ]; then
  echo "sci-playground not found at $PLAYGROUND_ROOT; the playground tools will say it is not configured. Pass --playground to fix." >&2
  PLAYGROUND_ROOT=""
fi

case "${DSH_HOME:-}" in
  "") DSH_HOME_DIR="$HOME/.dsh" ;;
  "~") DSH_HOME_DIR="$HOME" ;;
  "~/"*) DSH_HOME_DIR="$HOME/${DSH_HOME#~/}" ;;
  *) DSH_HOME_DIR="$DSH_HOME" ;;
esac
PROFILE_DIR="$DSH_HOME_DIR/profiles/$PROFILE_NAME"

command -v node >/dev/null || { echo "Node.js LTS (>= 24) is required." >&2; exit 1; }
[ "$(node --version | sed 's/^v//; s/\..*//')" -ge 24 ] || { echo "Node.js >= 24 is required." >&2; exit 1; }
command -v dsh >/dev/null || npm install -g @deepseek-ai/dsh@0.2.0-rc.2
[ "$(dsh --version | tr -d '[:space:]')" = "0.2.0-rc.2" ] || {
  echo "The kids lab plugin is tested with DSH 0.2.0-rc.2; the existing DSH installation was not changed." >&2; exit 1; }

CREATED=""
if [ ! -f "$PROFILE_DIR/package.json" ]; then
  dsh --profile "$PROFILE_NAME" --from-default-profile web --dump-config >/dev/null
  CREATED="--select-default"
fi

# The knowledge-base package first: the 实验模式 preset mounts its tools row and reads its kidsKb service.
dsh plugin --profile "$PROFILE_NAME" add --force "file:$KB_PLUGIN_DIR"
dsh plugin --profile "$PROFILE_NAME" add --force "file:$PLUGIN_DIR"

CONFIG_ARGS=("$SCRIPT_DIR/profile-config.js" "$PROFILE_DIR" "$KB_ROOT" "$PLAYGROUND_ROOT")
[ -n "$CREATED" ] && CONFIG_ARGS+=("$CREATED")
[ -n "$MODELS_FROM" ] && CONFIG_ARGS+=("--models-from" "$DSH_HOME_DIR/profiles/$MODELS_FROM")
node "${CONFIG_ARGS[@]}"

DUMP="$(dsh --profile "$PROFILE_NAME" --dump-config)"
for ROW in kids-kb preset-kidskb kids-lab-settings preset-kidslab; do
  case "$DUMP" in
    *"$ROW"*) ;;
    *) echo "The profile $PROFILE_NAME does not compose $ROW; check $PROFILE_DIR/cordis.patch.yml." >&2; exit 1 ;;
  esac
done

echo "知识库模式 installed from: $KB_PLUGIN_DIR"
echo "实验模式 installed from: $PLUGIN_DIR"
echo "For 知识库模式, open the session in $REPO_ROOT so the file tools can write kb/ cards."
echo "Restart DSH Web, then choose 实验模式 or 知识库模式 in a new session. Start it with:"
echo "  dsh --profile $PROFILE_NAME --port 3090"
