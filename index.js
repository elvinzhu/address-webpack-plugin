const chalk = require("chalk");
const os = require("os");

const ipArr = Array.prototype.concat.apply([], Object.values(os.networkInterfaces())).filter((item) => item.family === "IPv4" && !item.internal);

function print(config) {
  const { port = "8080", openPage = "/" } = config;
  setTimeout(() => {
    const path = port + openPage;
    console.log("app running at: \n");
    console.log("  local:", chalk.green("http://localhost:" + path));
    ipArr.forEach((item) => {
      console.log("  ip   :", chalk.green("http://" + item.address + ":" + path));
    });
  }, 100);
}

class DonePlugin {
  constructor(config) {
    this.config = config;
  }
  apply(compiler) {
    compiler.hooks.done.tap("Done Plugin", (stats) => {
      print(this.config);
    });
  }
}

module.exports = DonePlugin;
