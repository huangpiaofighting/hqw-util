const webpackim = require("webpack");
const ProgressBar = require("progress");
const chalk = require("chalk");
const ProgressBarPlugin = function(webpackself) {
  const webpack = webpackself || webpackim;
  const bar = new ProgressBar(
    `${chalk.greenBright("编译进度：:bar ")} ${chalk.greenBright(":percent")}`,
    { total: 20, complete: chalk.greenBright("♥"), incomplete: " " }
  );
  return new webpack.ProgressPlugin((percentage, message, ...args) => {
    bar.update(percentage);
    // if (bar.complete) {//bar.complete 遇到 webpack server hot时候就会一直是true
    //   bar.terminate();
    // }
    if (percentage === 1) {
      bar.terminate();
    }
  });
};
module.exports = ProgressBarPlugin;
