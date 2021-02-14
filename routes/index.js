var express = require('express');
var router = express.Router();
var user = require('../models/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addUser', function(req, res, next) {
  user.add(req, res, next);
});
module.exports = router;
