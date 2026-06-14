# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

## 本地開發與打包教學 (Local Development & Build Guide)

如果您是第一次執行這個專案，請按照以下步驟設定您的本地開發環境：

### 步驟 1：安裝 Node.js 與 npm
1. 前往 [Node.js 官方網站](https://nodejs.org/)。
2. 下載並安裝 **LTS 版本**（推薦大多數使用者使用，例如 Node 20 或更新版本）。
3. 安裝完成後，打開您的終端機（Terminal）或命令提示字元（CMD/PowerShell），輸入以下指令確認是否安裝成功：
   ```bash
   node -v
   npm -v
   ```
   *如果成功顯示版本號（例如 `v20.x.x` 與 `10.x.x`），即代表安裝成功。*

### 步驟 2：安裝專案依賴項目 (Dependencies)
1. 在終端機中，使用 `cd` 切換到專案的根目錄 `my-web`。
2. 執行以下指令安裝所有需要的套件：
   ```bash
   npm install
   ```
   *這會讀取 `package.json` 並自動下載所有套件到 `node_modules` 資料夾中。*

### 步驟 3：啟動本地開發伺服器
1. 執行以下指令啟動開發環境：
   ```bash
   npm run dev
   ```
   *終端機會顯示一個本地網址（通常是 `http://localhost:5173/`），點擊即可在瀏覽器預覽網頁，並支援熱更新 (HMR)。*

### 步驟 4：本地打包建置 (Build)
1. 當您準備好要部署網頁時，執行以下打包指令：
   ```bash
   npm run build
   ```
   *這會透過 TypeScript 進行型別檢查，並將程式碼編譯、壓縮，最終輸出至 `dist` 資料夾中。*

### 步驟 5：預覽打包後的網站
1. 若要在本地測試打包後的結果，可執行：
   ```bash
   npm run preview
   ```
   *這會啟動一個本地伺服器來預覽 `dist` 資料夾的內容。*

---

## GitHub Actions 自動化部署設定教學

本專案已內建 GitHub Actions 設定檔 [deploy.yml](file:///c:/Users/USER/Desktop/網頁設計bucket測試/my-web/.github/workflows/deploy.yml)，當您將程式碼推送到 GitHub 時，會自動進行建置並發佈至 GitHub Pages。

### 設定步驟：

1. **推送專案到 GitHub**：
   將整個專案（包含 `.github` 資料夾）初始化為 Git 儲存庫並推送到 GitHub 上。
2. **在 GitHub 儲存庫中進行設定**：
   * 進入您的 GitHub 專案頁面。
   * 點選上方的 **Settings** 頁籤。
   * 在左側選單中，點選 **Pages**。
   * 在 **Build and deployment** 下方的 **Source**，點選下拉選單，並將 *Deploy from a branch* 改選為 **GitHub Actions**。
3. **自動觸發部署**：
   * 當您將修改後的程式碼 `git push` 到 `main`（或 `master`）分支時，GitHub Actions 會自動開始執行。
   * 您可以點選 Repository 上方的 **Actions** 頁籤查看部署進度。部署成功後，會顯示您網站的公開網址。

---


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
