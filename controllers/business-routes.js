const router = require('express').Router();



// Login route

router.get('/owner', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('Owner');
});


module.exports = router;
