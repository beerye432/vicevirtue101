var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'Today' });
});

router.get('/edit.html', function(req, res, next) {
  res.render('edit', { title: 'Edit a Habit' });
});

router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Welcome!' });
});

router.get('/list.html', function(req, res, next) {
  res.render('list', { title: 'Today' });
});

router.get('/add.html', function(req, res, next) {
  res.render('add', { title: 'Add a Habit' });
});


module.exports = router;
