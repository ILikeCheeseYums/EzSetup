#!/usr/bin/env bash
# ==============================================================================
# EzSetup — Environment Verification & Homebrew Setup
# This script performs pre-flight checks and ensures Homebrew is ready.
# It can be freely edited and customized.
# ==============================================================================

set -e

# Ensure Homebrew is in PATH immediately for non-interactive / GUI shell launches
if [[ -x "/opt/homebrew/bin/brew" ]]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [[ -x "/usr/local/bin/brew" ]]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

# Terminal Colors
BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo ""
echo -e "${BOLD}EzSetup — Pre-flight Environment Check${NC}"
echo -e "-------------------------------------------------------"

# 1. macOS Darwin Check
if [[ "$(uname)" != "Darwin" ]]; then
  echo -e "${RED}[x] Error: EzSetup is designed for macOS only.${NC}"
  exit 1
fi

echo -e "${GREEN}[OK] Detected macOS: $(sw_vers -productVersion) ($(uname -m))${NC}"

# 2. Check for Homebrew
echo ""
echo -e "${CYAN}[*] Checking for Homebrew...${NC}"

if ! command -v brew >/dev/null 2>&1; then
  echo -e "${YELLOW}[!] Homebrew not found. Installing Homebrew...${NC}"
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # Configure PATH for Apple Silicon vs Intel
  if [[ -f "/opt/homebrew/bin/brew" ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
    if ! grep -q '/opt/homebrew/bin/brew' "$HOME/.zprofile" 2>/dev/null; then
      echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> "$HOME/.zprofile"
    fi
  elif [[ -f "/usr/local/bin/brew" ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
    if ! grep -q '/usr/local/bin/brew' "$HOME/.zprofile" 2>/dev/null; then
      echo 'eval "$(/usr/local/bin/brew shellenv)"' >> "$HOME/.zprofile"
    fi
  fi
  echo -e "${GREEN}[OK] Homebrew installed and PATH configured.${NC}"
else
  echo -e "${GREEN}[OK] Homebrew is already installed.${NC}"
fi

# 3. Ensure brew is updated and healthy
echo -e "${CYAN}[*] Updating Homebrew index...${NC}"
brew update
echo -e "${GREEN}[OK] Environment is ready.${NC}"