var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('SMTP',{
    service: 'yandex',
    debug: true,
    auth: {
        user: 'hype@ballriders.com',
        pass: 'nfobbpgjlyjub360'
    }
});

router.post('/ballride_style/subscribe',function(req, res) {
            var mailOptions = {
                from: 'BALLRIDERS <hype@ballriders.com>', // sender address
                to: 'vaggi25@mail.ru', // list of receivers
                subject: 'Subscription Successfully Complete', // Subject line
                text: 'We are glad you here.', // plaintext body
                html: '' // html body
            };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
        });
    
        var db = req.db;
        var newEmail = req.body.email;
        var collection = db.get('emailcollection');
        collection.insert({
            "email" : newEmail
        }, function (err, doc) {
            if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            console.log('all good');
            res.send(newEmail);
        }
        });
});

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('main', { title: 'Ballriders | Main Page' });
});
router.get('/soaring_balls_syndicate', function(req, res, next) {
  res.render('soaring_balls_syndicate/soaring_balls_syndicate', { title: 'Ballriders | Soaring Balls Syndicate' });
});
router.get('/soaring_balls_syndicate/works', function(req, res, next) {
  res.render('soaring_balls_syndicate/works', { title: 'Soaring Balls Syndicate | Works' });
});
router.get('/ballride_style', function(req, res, next) {
  res.render('ballride_style/ballride_style', { title: 'Ballriders | Ballride Style' });
});
router.get('/ballride_style/about', function(req, res, next) {
  res.render('ballride_style/about', { title: 'Ballride Style | About' });
});
router.get('/ballriders_creative_group', function(req, res, next) {
  res.render('ballriders_creative_group/ballriders_creative_group', { title: 'Ballriders | Ballriders Creative Group' });
});
router.get('/digital', function(req, res, next) {
  res.render('ballriders_creative_group/digital', { title: 'BCG | Digital ' });
});
router.get('/fashion', function(req, res, next) {
  res.render('ballriders_creative_group/fashion', { title: 'BCG | Fashion ' });
});
router.get('/web', function(req, res, next) {
  res.render('ballriders_creative_group/web', { title: 'BCG | Web ' });
});
router.get('/music', function(req, res, next) {
  res.render('ballriders_creative_group/music', { title: 'BCG | Music ' });
});

module.exports = router;
