const chalk = require('chalk');

function printSuccess(text) {
  console.log(chalk.greenBright.bold(text));
}

function printError(text) {
  console.log(chalk.redBright.bold(text));
}
function printErrorAg(text) {
  console.log(chalk.red.bgWhite.bold(text));
}
function printWarn(text) {
  console.log(chalk.yellowBright.bold(text));
}

function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  );
}
module.exports = {
  chalk,
  clearConsole,
  printSuccess,
  printWarn,
  printErrorAg,
  printError,
};
