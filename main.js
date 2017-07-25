const { app, BrowserWindow } = require("electron");
const Express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const url = require("url");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "./index.html"),
    protocol: "file"
  }));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  console.log("App has started!");
  console.log("  Press opt-cmd-i to open the developer tools.");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
