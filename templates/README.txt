EzSetup — macOS Setup Bundle
==============================

This folder contains your tailored macOS setup files.

FILES:
- run.sh: The automated installation script.
- setup-env.sh: Pre-flight macOS and Homebrew verification script.
- Brewfile: Homebrew configuration file with all chosen apps and packages.

HOW TO RUN:
1. Open your Terminal (Terminal.app, iTerm2, or Ghostty).
2. Navigate to this unzipped folder:
   cd /path/to/ezsetup-bundle
3. Make the script executable and run it:
   chmod +x run.sh
   ./run.sh

WHAT THE SCRIPTS DO:
- setup-env.sh verifies macOS, installs Homebrew if missing, and configures PATH.
- run.sh executes setup-env.sh, installs all selected apps via 'brew bundle', and applies developer system preferences.

Happy coding!
