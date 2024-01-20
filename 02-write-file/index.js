const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");
const { stdin, stdout, exit } = require("process");
const resultFilePath = path.join(__dirname, "write-text.txt");
const output = fs.createWriteStream(resultFilePath);

const emitter = new EventEmitter();

emitter.on("start", () => console.log("Please, write some text"));
emitter.emit("start");

stdin.on("data", data => {
  if (data.toString().trim() === "exit") {
    scriptExit();
  }
  output.write(data);
});

process.on("SIGINT", scriptExit);

function scriptExit() {
  stdout.write("\nThanks. Good bye!");
  exit();
}