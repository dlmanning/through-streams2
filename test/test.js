var through = require('../index');

process.stdin.pipe(through(function (data) {
  this.queue(data.toString().toUpperCase());
}, function (data) {})).pipe(process.stdout);