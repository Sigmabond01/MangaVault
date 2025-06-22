const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./public";
const validExtensions = [".webp", ".jpeg", ".png", "jpg"]; // you can add .gif, etc.

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(inputFolder, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (validExtensions.includes(ext)) {
    const outputPath = filePath.replace(ext, ".webp");
    sharp(filePath)
      .toFile(outputPath)
      .then(() => console.log(`✅ ${filePath} → ${outputPath}`))
      .catch((err) => console.error(`❌ ${filePath}`, err));
  }
});
