const figlet = require("figlet");
const printer = require("@darkobits/lolcatjs");

const welcome = function(welcomeText) {
  const txt = figlet.textSync(welcomeText);
  const text = printer.default.fromString(txt);
  console.log(text);
};

module.exports = welcome;
