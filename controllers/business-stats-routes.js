const router = require('express').Router();
//const { Gallery, Painting } = require('../models');


// Login route

router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('Dashboard');
});


module.exports = router;