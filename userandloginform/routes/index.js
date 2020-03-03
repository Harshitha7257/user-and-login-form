var express = require('express');
var router = express.Router();
let userloggedin=false;
let user={}

let users = [
  { email: 'h@h.com', password: 'abcd', name: 'Harshitha' },
]


  router.get('/', 
  function (req, res, next) {
    if (userloggedin){
      next();
    }else{
    res.redirect('/signin', )
    }
  },
  function(req, res, next){
    res.render('index',{title: 'content'});
  });

  router.get('/signin', function (req, res) {
    res.render('signin', { title: 'Sign in' })
  });

router.post('/signin', function (req, res) {
  let { email, password } = req.body;
  console.log(email);
  console.log(password);
  if (email != undefined && email !== '' && password != undefined && password !== '') {
    // get the user from DB based on the given details
    userloggedin=true;
    res.redirect('/')
  }else{
    // validate inputs from request
    res.render('signin', { title: 'Sign in' });
  }
});





module.exports = router;




