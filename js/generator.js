// EzSetup File & ZIP Generator (Pure Functional - No Classes)

// Helper to look up an item by ID
function getItemById(id) {
  return ITEMS.find(item => item.id === id);
}

// 1. Generate Brewfile contents from selected item IDs
function generateBrewfile(selectedIds) {
  const selectedItems = Array.from(selectedIds)
    .map(getItemById)
    .filter(Boolean);

  const brewItems = selectedItems.filter(item => item.type === 'brew');
  const caskItems = selectedItems.filter(item => item.type === 'cask');

  const lines = [
    '# EzSetup Generated Brewfile',
    '# https://github.com/ezsetup',
    '',
    'tap "homebrew/bundle"'
  ];

  // Check if any custom taps are needed (e.g. Bun)
  if (selectedItems.some(item => item.brewPackage && item.brewPackage.startsWith('oven-sh/'))) {
    lines.push('tap "oven-sh/bun"');
  }

  if (brewItems.length > 0) {
    lines.push('', '# CLI Tools & Runtimes');
    brewItems.forEach(item => {
      lines.push(`brew "${item.brewPackage}"`);
    });
  }

  if (caskItems.length > 0) {
    lines.push('', '# GUI Applications & Casks');
    caskItems.forEach(item => {
      lines.push(`cask "${item.brewPackage}"`);
    });
  }

  lines.push('');
  return lines.join('\n');
}

// 2. Generate run.sh installer script
function generateRunScript(selectedIds) {
  const selectedItems = Array.from(selectedIds)
    .map(getItemById)
    .filter(Boolean);

  const tweakItems = selectedItems.filter(item => item.type === 'tweak');
  const hasTweaks = tweakItems.length > 0;

  let tweakCommandsSection = '';
  if (hasTweaks) {
    const commands = [];
    tweakItems.forEach(item => {
      if (item.tweakCommands) {
        commands.push(`  # ${item.name}`);
        item.tweakCommands.forEach(cmd => commands.push(`  ${cmd}`));
      }
    });

    tweakCommandsSection = `
# 3. macOS Developer Tweaks
echo ""
echo -e "\${CYAN}[*] Applying macOS developer system preferences...\${NC}"
${commands.join('\n')}

echo -e "\${CYAN}[*] Restarting affected system services (Finder, Dock)...\${NC}"
killall Finder Dock 2>/dev/null || true
echo -e "\${GREEN}[OK] macOS system preferences applied.\${NC}"
`;
  }

  return `#!/usr/bin/env bash
# ==============================================================================
# EzSetup — Automated macOS Environment Installer
# Generated: ${new Date().toISOString().split('T')[0]}
# ==============================================================================

set -e

# Terminal Colors
BOLD='\\033[1m'
GREEN='\\033[0;32m'
CYAN='\\033[0;36m'
YELLOW='\\033[1;33m'
RED='\\033[0;31m'
NC='\\033[0m' # No Color

echo ""
echo -e "\${BOLD}EzSetup — macOS Developer Environment Setup\${NC}"
echo -e "-------------------------------------------------------"

# 1. macOS Darwin Check
if [[ "\$(uname)" != "Darwin" ]]; then
  echo -e "\${RED}[x] Error: EzSetup is designed for macOS only.\${NC}"
  exit 1
fi

echo -e "\${GREEN}[OK] Detected macOS: \$(sw_vers -productVersion) (\$(uname -m))\${NC}"

# 2. Check for Homebrew
echo ""
echo -e "\${CYAN}[*] Checking for Homebrew...\${NC}"

if ! command -v brew >/dev/null 2>&1; then
  echo -e "\${YELLOW}[!] Homebrew not found. Installing Homebrew...\${NC}"
  /bin/bash -c "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # Configure PATH for Apple Silicon vs Intel
  if [[ -f "/opt/homebrew/bin/brew" ]]; then
    eval "\$(/opt/homebrew/bin/brew shellenv)"
    if ! grep -q '/opt/homebrew/bin/brew' "\$HOME/.zprofile" 2>/dev/null; then
      echo 'eval "\$(/opt/homebrew/bin/brew shellenv)"' >> "\$HOME/.zprofile"
    fi
  elif [[ -f "/usr/local/bin/brew" ]]; then
    eval "\$(/usr/local/bin/brew shellenv)"
    if ! grep -q '/usr/local/bin/brew' "\$HOME/.zprofile" 2>/dev/null; then
      echo 'eval "\$(/usr/local/bin/brew shellenv)"' >> "\$HOME/.zprofile"
    fi
  fi
  echo -e "\${GREEN}[OK] Homebrew installed and PATH configured.\${NC}"
else
  echo -e "\${GREEN}[OK] Homebrew is already installed.\${NC}"
fi

# Ensure brew is updated and healthy
echo -e "\${CYAN}[*] Updating Homebrew index...\${NC}"
brew update

# 3. Install packages via Brewfile
SCRIPT_DIR="\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
BREWFILE="\$SCRIPT_DIR/Brewfile"

if [[ -f "\$BREWFILE" ]]; then
  echo ""
  echo -e "\${CYAN}[*] Installing selected packages via Homebrew bundle...\${NC}"
  brew bundle --file="\$BREWFILE"
  echo -e "\${GREEN}[OK] All packages installed successfully.\${NC}"
else
  echo -e "\${YELLOW}[!] Brewfile not found in \$SCRIPT_DIR. Skipping package installation.\${NC}"
fi
${tweakCommandsSection}
echo ""
echo -e "\${BOLD}\${GREEN}=======================================================\${NC}"
echo -e "\${BOLD}\${GREEN}  EzSetup installation complete. All tools ready.      \${NC}"
echo -e "\${BOLD}\${GREEN}=======================================================\${NC}"
echo -e "Tip: Restart your terminal window to reload your shell environment."
echo ""
`;
}

// 3. Generate README.txt included in the .zip bundle
function generateReadmeText(selectedIds) {
  return `EzSetup — macOS Setup Bundle
==============================

This folder contains your tailored macOS setup files.

FILES:
- run.sh: The automated installation script.
- Brewfile: Homebrew configuration file with all chosen apps and packages.

HOW TO RUN:
1. Open your Terminal (Terminal.app, iTerm2, or Ghostty).
2. Navigate to this unzipped folder:
   cd /path/to/ezsetup-bundle
3. Make the script executable and run it:
   chmod +x run.sh
   ./run.sh

WHAT THE SCRIPT DOES:
- Verifies macOS environment.
- Checks if Homebrew is installed. If missing, installs it automatically.
- Automatically handles Apple Silicon (/opt/homebrew) vs Intel (/usr/local) paths.
- Installs all selected apps, tools, and runtimes via 'brew bundle'.
- Applies any selected macOS developer defaults (e.g. Finder hidden files, key repeat).

Happy coding!
`;
}

// 4. Generate and trigger download of the .zip bundle
async function generateAndDownloadZip(selectedIds) {
  if (!window.JSZip) {
    alert('JSZip library is still loading. Please try again in a moment.');
    return;
  }

  const zip = new window.JSZip();

  const brewfileContent = generateBrewfile(selectedIds);
  const runScriptContent = generateRunScript(selectedIds);
  const readmeContent = generateReadmeText(selectedIds);

  zip.file('Brewfile', brewfileContent);
  zip.file('run.sh', runScriptContent, { unixPermissions: '755' });
  zip.file('README.txt', readmeContent);

  const content = await zip.generateAsync({
    type: 'blob',
    platform: 'UNIX'
  });

  if (window.saveAs) {
    window.saveAs(content, 'ezsetup-bundle.zip');
  } else {
    // Fallback if FileSaver is not loaded
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ezsetup-bundle.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
