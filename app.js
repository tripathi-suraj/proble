var http = require('http');
var fs = require('fs');
var cluster = require('cluster');
var express = require('express');
var ejs = require('ejs');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('uncaughtException', function (err, origin) {
  console.error(
    new Date().toUTCString() + ' uncaughtException:',
    err.message,
    err.stack
  );
  process.exit(1);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
var app = express();
process.app = app;

app.vars = {};
app.vars.basepath = __dirname;
//set view using express
app.set('PORT', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
console.log(fs.existsSync(app.vars.basepath + '/env'));

try {
  require('./routes/index').attachRoute(app);
} catch (e) {
  console.log(e);
}

http.createServer(app).listen(app.get('PORT'));
