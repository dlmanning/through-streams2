var through = require('../index');

process.stdin.pipe(
  through(
    function (data) {
      this.queue(data.toString().toUpperCase());
    }
  ))
.pipe(process.stdout);