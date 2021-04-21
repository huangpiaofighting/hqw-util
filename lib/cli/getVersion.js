const program = require("commander");

class Program {
  constructor(props) {
    this.version = props.version;
    this.setVersion();
  }
  setVersion() {
    program.version(this.version, "-v, --version");
  }
  run() {
    program.parse(process.argv);
  }
}

const getVersion = function(props) {
  const programObj = new Program(props);
  programObj.run();
};

module.exports = getVersion;
