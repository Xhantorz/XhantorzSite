var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res){
  res.send('Home page');
});

router.get('/about', function(req, res){
  res.send('About page');
});

router.get('/contact');
router.post('/contact');
