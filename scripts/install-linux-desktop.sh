#!/usr/bin/env bash
# Install Clawdbot desktop launcher for Linux

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
DESKTOP_FILE="${REPO_ROOT}/clawdbot.desktop"
ICON_PNG="${REPO_ROOT}/apps/macos/Icon.icon/Assets/clawdbot-mac.png"
ICON_SVG="${REPO_ROOT}/docs/assets/pixel-lobster.svg"

# Determine installation directories
if [[ -n "${XDG_DATA_HOME:-}" ]]; then
    APPS_DIR="${XDG_DATA_HOME}/applications"
    ICONS_DIR="${XDG_DATA_HOME}/icons/hicolor"
else
    APPS_DIR="${HOME}/.local/share/applications"
    ICONS_DIR="${HOME}/.local/share/icons/hicolor"
fi

ICON_512_DIR="${ICONS_DIR}/512x512/apps"
ICON_SVG_DIR="${ICONS_DIR}/scalable/apps"

echo "==> Installing Clawdbot desktop launcher"

# Check if clawdbot or npx is available
CLAWDBOT_CMD=""
if command -v clawdbot &> /dev/null; then
    CLAWDBOT_CMD="clawdbot"
    echo "✓ Found clawdbot in PATH"
elif command -v npx &> /dev/null; then
    CLAWDBOT_CMD="npx clawdbot"
    echo "✓ Will use npx to run clawdbot"
else
    echo "WARNING: Neither clawdbot nor npx found in PATH"
    echo "Please install Node.js and clawdbot:"
    echo "  npm install -g clawdbot"
    echo ""
    echo "Continuing with installation anyway..."
fi

# Create directories
mkdir -p "${APPS_DIR}"
mkdir -p "${ICON_512_DIR}"
mkdir -p "${ICON_SVG_DIR}"

# Copy desktop file
if [[ ! -f "${DESKTOP_FILE}" ]]; then
    echo "ERROR: ${DESKTOP_FILE} not found"
    exit 1
fi

cp "${DESKTOP_FILE}" "${APPS_DIR}/clawdbot.desktop"
chmod +x "${APPS_DIR}/clawdbot.desktop"
echo "✓ Installed desktop file to ${APPS_DIR}/clawdbot.desktop"

# Install icons (both PNG and SVG)
ICON_INSTALLED=0

# Install PNG icon (512x512)
if [[ -f "${ICON_PNG}" ]]; then
    cp "${ICON_PNG}" "${ICON_512_DIR}/clawdbot.png"
    echo "✓ Installed PNG icon to ${ICON_512_DIR}/clawdbot.png"
    ICON_INSTALLED=1
fi

# Install SVG icon (scalable)
if [[ -f "${ICON_SVG}" ]]; then
    cp "${ICON_SVG}" "${ICON_SVG_DIR}/clawdbot.svg"
    echo "✓ Installed SVG icon to ${ICON_SVG_DIR}/clawdbot.svg"
    ICON_INSTALLED=1
fi

if [[ "${ICON_INSTALLED}" -eq 1 ]]; then
    # Update icon cache if available
    if command -v gtk-update-icon-cache &> /dev/null; then
        gtk-update-icon-cache -f -t "${ICONS_DIR}" 2>/dev/null || true
        echo "✓ Updated icon cache"
    fi
else
    echo "⚠ No icons found"
    echo "  PNG: ${ICON_PNG}"
    echo "  SVG: ${ICON_SVG}"
    echo "  The launcher will use a default icon"
fi

# Update desktop database if available
if command -v update-desktop-database &> /dev/null; then
    update-desktop-database "${APPS_DIR}" 2>/dev/null || true
    echo "✓ Updated desktop database"
fi

echo ""
echo "==> Installation complete!"
echo ""
echo "You can now:"
echo "  • Find Clawdbot in your application menu"
echo "  • Right-click the launcher for quick actions:"
echo "    - Open Dashboard"
echo "    - Start Gateway"
echo "    - Open CLI"
echo "    - Check Status"
echo ""
if [[ -n "${CLAWDBOT_CMD}" ]]; then
    echo "Command: ${CLAWDBOT_CMD}"
    echo ""
fi
echo "To uninstall:"
echo "  rm ${APPS_DIR}/clawdbot.desktop"
echo "  rm ${ICON_512_DIR}/clawdbot.png"
echo "  rm ${ICON_SVG_DIR}/clawdbot.svg"
