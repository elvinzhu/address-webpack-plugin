const chalk = require("chalk");
const os = require("os");

const ipArr = Array.prototype.concat.apply([], Object.values(os.networkInterfaces())).filter((item) => item.family === "IPv4" && !item.internal);
const pluginName = "address-webpack-plugin";

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

class AddressWebpackPlugin {
  constructor(config) {
    this.config = config || {};
  }
  apply(compiler) {
    const config = this.config;
    const compilerHookName = config.compilerHookName || "done";
    if (compiler.hooks[compilerHookName]) {
      compiler.hooks[compilerHookName].tap(pluginName, () => {
        print(config);
      });
    } else {
      console.error(chalk.red(`[${pluginName}]: tap hook '${compilerHookName}' failed`));
    }
  }
}

module.exports = AddressWebpackPlugin;
