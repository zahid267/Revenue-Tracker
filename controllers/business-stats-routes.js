const router = require('express').Router();
//const { Gallery, Painting } = require('../models');


// Login route

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('dashboard');
});


module.exports = router;