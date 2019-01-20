var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Youtube Downloader' });
});
router.post('/video', function(req, res, next) {
  res.render('listvideo', {});
})

module.exports = router;
