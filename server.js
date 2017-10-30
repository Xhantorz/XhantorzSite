// require all dependencies
var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");

// add logging and static middleware to express
app.use(logger('dev'));

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './public')));

// GET response for '/'
app.get('/', function (req, res, next) {
  res.render('index');
});

// start up the server
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
