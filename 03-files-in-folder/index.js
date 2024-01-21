const path = require("path");
const fs = require("fs");
// const fsPromises = require ("fs/promises");

const filePath = path.join(__dirname, "/secret-folder");

fs.readdir(filePath, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    fs.stat((path.join(filePath, file)), (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!stats.isDirectory()) {
        const fileAndExt = path.basename(file);
        console.log(fileAndExt.replace(".", " - ") + " - " + (stats.size/1024).toFixed(2) + "kb");
      }
    });
  });
});
