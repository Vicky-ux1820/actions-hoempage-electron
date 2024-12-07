const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

let mainWindow;
let openedFilePath = null;

// Function to create the main BrowserWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1030,
    height: 800,
    minWidth: 600,
    minHeight: 600,
    frame: false,
    titlebarStyle: "hidden",
    webPreferences: {
      nodeIntegration: false, // Ensure secure context
      preload: path.join(__dirname, "../src/preload.js"), // Adjust path to preload.js
    },
  });

  // Load the HTML file
  // mainWindow.loadFile(path.join(__dirname, 'index.html'));
  const startURL =
  process.env.NODE_ENV === "production"
    ? `file://${path.join(__dirname, "../dist/index.html")}` // Path to `index.html` in `dist`
    : "http://localhost:3000"; // Development server


  mainWindow.loadURL(startURL);
  // Handle opened files (macOS/Windows)
  if (openedFilePath) {
    mainWindow.webContents.once("did-finish-load", () => {
      console.log(`Opened file: ${openedFilePath}`);
      mainWindow.webContents.send("file-opened", openedFilePath);
    });
  }

  ipcMain.on("minimize-window", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("maximize-window", () => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
    }
  });

  ipcMain.on("close-window", () => {
    if (mainWindow) mainWindow.close();
  });
}

// Function to create `.project-eigenspace` in the root directory
function createProjectFileAtRoot() {
  const rootDirectory = process.cwd();
  const filePath = path.join(rootDirectory, ".project-eigenspace");

  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "Eigenspace Project File", "utf8");
      console.log(`File created at: ${filePath}`);
    } else {
      console.log(`File already exists at: ${filePath}`);
    }
  } catch (error) {
    console.error("Error creating .project-eigenspace file:", error);
  }
}

// Function to set up `.eigenspace` folder and `style.css`
function setupEigenspaceFolder() {
  const rootDirectory = process.cwd();
  const eigenspaceDir = path.join(rootDirectory, ".eigenspace");
  const cssFilePath = path.join(eigenspaceDir, "style.css");

  try {
    // Ensure `.eigenspace` folder exists
    if (!fs.existsSync(eigenspaceDir)) {
      fs.mkdirSync(eigenspaceDir);
      console.log(`Folder created at: ${eigenspaceDir}`);
    }

    // Ensure `style.css` exists with default content
    if (!fs.existsSync(cssFilePath)) {
      const defaultCSS = `
        body {
          background-color: white;
          color: black;
          font-family: Arial, sans-serif;
        }
        h1 {
          text-align: center;
          font-size: 2em;
        }
      `;
      fs.writeFileSync(cssFilePath, defaultCSS.trim(), "utf8");
      console.log(`CSS file created at: ${cssFilePath}`);
    } else {
      console.log(`CSS file already exists at: ${cssFilePath}`);
    }
  } catch (error) {
    console.error("Error setting up .eigenspace folder:", error);
  }

  // Watch for changes in `style.css`
  fs.watchFile(cssFilePath, () => {
    console.log(`CSS file updated: ${cssFilePath}`);
    if (mainWindow) {
      mainWindow.webContents.send("update-css", "../.eigenspace/style.css"); // Correct path
    }
  });
}

// App lifecycle
app.whenReady().then(() => {
  createProjectFileAtRoot(); // Create `.project-eigenspace`
  setupEigenspaceFolder(); // Create `.eigenspace` and `style.css`
  createWindow(); // Create the main window

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
