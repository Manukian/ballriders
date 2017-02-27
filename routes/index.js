var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var json2csv = require('json2csv');
var fs = require('fs');

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
    
        var db = req.db;
        var newEmail = req.body.email;
        var collection = db.get('emailcollection');
        collection.insert({
            "email" : newEmail
        }, function (err, doc) {
            if (err) {
            // If it failed, return error
            res.send("There was a problem making the subscription, please try again");
        }
        else {
            // And forward to success page
            // send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }
            });
            var fields = ['email'];
            var emails = collection.find({},function(err, docs) {
                var csv = json2csv({ data: docs, fields: fields });
                fs.writeFile('emails.csv', csv, function(err) {
                  if (err) throw err;
                  console.log('file saved');
                });
            });
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
router.get('/ru/soaring_balls_syndicate', function(req, res, next) {
  res.render('soaring_balls_syndicate/soaring_balls_syndicate_ru', { title: 'Ballriders | Синдикат Летающих Мячей' });
});
router.get('/ru/soaring_balls_syndicate/works', function(req, res, next) {
  res.render('soaring_balls_syndicate/works_ru', { title: 'Синдикат Летающих Мячей | Портфолио' });
});
router.get('/ballride_style', function(req, res, next) {
  res.render('ballride_style/ballride_style', { title: 'Ballriders | Ballride Style' });
});
router.get('/ballride_style/about', function(req, res, next) {
  res.render('ballride_style/about', { title: 'Ballride Style | About' });
});
router.get('/ballride_style/worldwide', function(req, res, next) {
  res.render('ballride_style/worldwide', { title: 'Ballride Style | Worldwide' });
});
router.get('/ballride_style/people', function(req, res, next) {
  res.render('ballride_style/people', { title: 'Ballride Style | People' });
});
router.get('/ballriders_creative_group', function(req, res, next) {
  res.render('ballriders_creative_group/ballriders_creative_group', { title: 'Ballriders | Ballriders Creative Group' });
});
router.get('/ballriders_creative_group/digital', function(req, res, next) {
  res.render('ballriders_creative_group/digital', { title: 'BCG | Digital ' });
});
router.get('/ballriders_creative_group/fashion', function(req, res, next) {
  res.render('ballriders_creative_group/fashion', { title: 'BCG | Fashion ' });
});
router.get('/ballriders_creative_group/web', function(req, res, next) {
  res.render('ballriders_creative_group/web', { title: 'BCG | Web ' });
});
router.get('/ballriders_creative_group/music', function(req, res, next) {
  res.render('ballriders_creative_group/music', { title: 'BCG | Music ' });
});
router.get('/ballriders_creative_group/music/barak_obama', function(req, res, next) {
  res.render('ballriders_creative_group/music/barak_obama', { title: 'Music | Barak Obama ' });
});
router.get('/ballriders_creative_group/digital/bubblips', function(req, res, next) {
  res.render('ballriders_creative_group/digital/lips', { title: 'Digital | Bubblips ' });
});


module.exports = router;
