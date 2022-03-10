var http = require('http');
var fs = require('fs');
var cluster = require('cluster');
process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('uncaughtException', function (err, origin) {
  console.log(process.stderr.fd);
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');

http
  .createServer(function (req, res) {
    res.write('hello');
    res.end();
  })
  .listen(3000);
