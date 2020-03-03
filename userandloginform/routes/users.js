var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// var ObjectId = require('mongodb').ObjectID;

let authenticate = function (req, res, next) {
  var loggedIn = req.session.isLoggedIn;
  console.log(loggedIn)
  if (loggedIn) {
    next()
  } else {
    res.redirect('/signin')
  }
}

let authenticated = function (req, res, next) {
  req.session.isLoggedIn = req.session.isLoggedIn ? true : false;
  console.log('authenticated', req.session)
  if (req.session.isLoggedIn) {
    res.locals.user = req.session.user;
    next();
  } else {
    next();
  }
}


router.use(authenticated);
router.use(authenticate);

/* GET home page. */
router.get('/',function (req, res, next) {
    res.render('index' ,{user: req.session.user});
  });

  router.get('/', function (req,res,next){
 res.send('respond with a resources');
  });

module.exports = router;
