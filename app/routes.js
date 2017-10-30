var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res){
  res.send('Home page');
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res){
  res.send('About page');
});

router.get('/contact');
router.post('/contact');
