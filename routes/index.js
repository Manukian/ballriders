var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ballriders | Coming soon' });
});
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Ballriders | Main Page' });
});
router.get('/soaring_balls_syndicate', function(req, res, next) {
  res.render('soaring_balls_syndicate/soaring_balls_syndicate', { title: 'Ballriders | Soaring Balls Syndicate' });
});
router.get('/ballride_style', function(req, res, next) {
  res.render('ballride_style/ballride_style', { title: 'Ballriders | Ballride Style' });
});
router.get('/ballriders_creative_group', function(req, res, next) {
  res.render('ballriders_creative_group/ballriders_creative_group', { title: 'Ballriders | Ballriders Creative Group' });
});

module.exports = router;
