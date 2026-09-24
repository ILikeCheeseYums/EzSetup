# EzSetup ⚡
> The "Vanilla Tweaks" for macOS Developer Environments.

EzSetup is an ultra-minimalist, modular web tool designed to help junior developers, students, and engineering teams set up their Mac development environment in minutes.

Pick the apps, runtimes, CLI tools, and macOS tweaks you want, and click **Download .zip**. EzSetup generates a tailored `Brewfile` and a safe, automated `run.sh` installer script.

---

## 🎯 Features

- **Modular "Vanilla Tweaks" Picker**: Select exactly what you need — from code editors and runtimes to terminal ricing and macOS system defaults.
- **One-Click Presets**:
  - **Frontend Web Dev**: Node.js (`fnm`), pnpm, VS Code, Google Chrome.
  - **Full-Stack**: Node.js, Python (`uv`), Docker/OrbStack, TablePlus, Bruno.
  - **Python / AI**: Python (`uv`), VS Code, Ghostty, CLI tools.
  - **Terminal Aficionado**: Ghostty, Starship prompt, `bat`, `eza`, `zoxide`, `fzf`, `ripgrep`.
- **Zero-Build, Pure Web**: Runs in any browser right out of the box (`open index.html`).
- **Safe & Idempotent `run.sh`**:
  - Automatically checks if Homebrew is installed — if missing, installs it.
  - Automatically handles Apple Silicon (`/opt/homebrew`) vs Intel (`/usr/local`) PATH configuration.
  - Installs all selected tools via `brew bundle`.
  - Applies selected macOS developer defaults (Finder hidden files, fast key repeat, dock speedup).

---

## 🚀 Quick Start

### 1. Open the App
Simply open `index.html` in your browser:
```bash
open index.html
```
Or serve it locally:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### 2. Choose Your Stack
- Pick a starter preset or customize your tools using the cards.
- Use the search bar to quickly find tools.

### 3. Download & Install
1. Click **Download .zip** on the bottom bar to get `ezsetup-bundle.zip`.
2. Unzip it and open your terminal in the unzipped folder:
   ```bash
   unzip ezsetup-bundle.zip -d ezsetup
   cd ezsetup
   chmod +x run.sh
   ./run.sh
   ```

---

## 📁 Project Structure

```
EzSetup/
├── index.html        # Clean, minimalist UI (Tailwind CSS CDN + JSZip)
├── js/
│   ├── data.js       # Catalog of apps, tools, tweaks, and presets
│   ├── generator.js  # Pure functions for Brewfile, run.sh & zip generation
│   └── app.js        # DOM rendering, state management & user interactions
└── README.md         # Project overview and documentation
```

---

## 🛡️ Junior Developer Safety Guarantee

- **macOS Darwin Only**: Scripts exit immediately with a helpful error if run on unsupported operating systems.
- **No Clobbering**: Uses native Homebrew bundle management and non-destructive macOS `defaults write`.
- **Zero Sudo Password Hacks**: Standard Homebrew installation flow respecting your Mac's security settings.
