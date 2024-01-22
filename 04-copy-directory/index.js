const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;
const copyFile = fsPromises.copyFile;
const { exit } = require("process");

const dirPath = path.join(__dirname, "/files");
const dirNewPath = path.join(__dirname, "/files-copy");
// console.log(dirNewPath);

(function copyDir() {

  fs.mkdir(dirNewPath, {
    recursive: true,
  }, err => {
    if (err) throw err;
  });
  
  fs.readdir(dirNewPath, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
      fs.unlink(path.join(dirNewPath, file), err => {
        if(err) throw err;
        return;
      });
    })
  });
  
})();



fs.readdir(dirPath, (err, files) => {
  if (err) throw err;
  console.log("Folder 'files': ");
  console.log(files);
  console.log("Folder 'files-copy': ");
  files.forEach(file => {
    copyFile(path.join(dirPath, file), path.join(dirNewPath, file));
    console.log(file);
  });
  exit();
});

