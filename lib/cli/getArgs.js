const yargsParser = require('yargs-parser')
const argv =  yargsParser(process.argv.slice(2));

module.exports = argv