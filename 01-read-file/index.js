
const path = require("path");
const fs = require("fs");
const { stdout } = require("process");

// const sourcePath = path.resolve(__dirname, "text.txt");
const sourcePath = path.join(__dirname, "text.txt");

const stream = fs.createReadStream(sourcePath, "utf-8");
stream.on("data", data => stdout.write(data));

// let data = "";
// stream.on("data", (chunk) => (data += chunk));
// stream.on("end", () => console.log(data));
// stream.on("error", (error) => console.log("Error", error.message));