const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const stylesPath = path.join(__dirname, "styles");
const resultPath = path.join(__dirname, "project-dist", "bundle.css");
// console.log(bundlePath);
const result = fs.createWriteStream(resultPath);

fsPromises
  .readdir(stylesPath)
  .then(files  => {
    files.forEach(file => {
      const filePath = path.join(stylesPath, file);
      const fileName = path.basename(filePath);
      const fileExt = path.extname(filePath);
      if (fileExt === ".css") {
        const sourceFile = fs.createReadStream(path.join(stylesPath, fileName));
        sourceFile.on("data", data => {
          result.write(data.toString() + "\n");
        }) 
      }
    });
  }
)