var Transform = require('stream').Transform
  , util = require('util')
  ;

function ThroughStream (write, end, options) {
  if (!(this instanceof ThroughStream)) {
    return new ThroughStream(write, end, options);
  }

  Transform.call(this, options);

  this._write_ = write.bind(this);
  this.once('end', end.bind(this));
}

util.inherits(ThroughStream, Transform);

ThroughStream.prototype._transform = function (chunk, encoding, done) {
  this._write_(chunk);
  done();
};

ThroughStream.prototype.queue = ThroughStream.prototype.push;

module.exports = ThroughStream;