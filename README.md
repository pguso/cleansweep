# 🧹 CleanSweep – A Disk Cleanup App Built with Tauri, Rust, and React

CleanSweep is a lightweight and blazing-fast macOS desktop app built with [Tauri](https://tauri.app), leveraging a **Rust** backend and a **React + TailwindCSS** frontend.

Related article 👉 [Develop a Desktop App with Tauri: Scan & Clean Your Disk](https://pguso.medium.com/develop-a-desktop-app-with-tauri-scan-clean-your-disk-ecf5352d2668), this project demonstrates how to build a native-like experience using modern web technologies and system-level performance.

---

## 🚀 Features

- 📂 Select a folder or disk to scan
- 📊 Analyze disk usage: total size, largest & oldest files
- 🗑️ Move selected files safely to trash
- 💨 Super fast performance with native Rust backend
- 💅 Sleek, responsive UI with React + TailwindCSS

---


## 🧰 Tech Stack

- **Rust** (Tauri backend)
- **React + TypeScript** (frontend)
- **TailwindCSS** (styling)
- **Tauri** for building a secure and lightweight desktop application

---

## 🖥️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js + npm](https://nodejs.org/)
- [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites/)

Check with:

```bash
cargo -V
npm -v
````

### Create & Run the App

````
npm create tauri-app
cd tauri-app
npm install
npm run tauri dev
````

On first run, Tauri will compile Rust dependencies – this might take a bit.

### Project Structure

| Path                   | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `src/`                 | Frontend React application                              |
| `src-tauri/`           | Tauri-specific Rust backend                             |
| `src-tauri/src/lib.rs` | Core logic for scanning folders and trashing files      |
| `src/components/`      | UI components like `PathSelector`, `CleanupSuggestions` |
| `package.json`         | Frontend dependencies and scripts                       |
| `Cargo.toml`           | Rust dependencies and build settings                    |
| `tauri.conf.json`      | Tauri app configuration                                 |


## Ideas for Extension
- Scan multiple folders
- Add file type filters (e.g., only show .mp4, .zip, etc.)
- Show file previews or icons
- Add native notifications after cleanup

## 📚 Learn More

- [Tauri Documentation](https://tauri.app/)
- [Rust Lang Book](https://doc.rust-lang.org/book/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

## ✍️ Author

Created by [@pguso](https://github.com/pguso)

## 📖 Read the Full Article

👉 [Develop a Desktop App with Tauri: Scan & Clean Your Disk](https://pguso.medium.com/develop-a-desktop-app-with-tauri-scan-clean-your-disk-ecf5352d2668)

## 📃 License

MIT




