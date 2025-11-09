var express = require('express');
var router = express.Router();
router.all('/*', function(req, res, next) {
    res.app.locals.layout = 'home';
    next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.render('home/about', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.render('home/contact', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.render('home/product', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.render('home/services', { title: 'Express' });
});
router.get('/', function(req, res, next) {
    res.render('home/single', { title: 'Express' });
});


module.exports = router;
