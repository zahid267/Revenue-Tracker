const router = require('express').Router();
const {Profit} = require('../../models');

//load profit data, make sure it has same properties
// Login route

let profitData = [];

router.get('/', async(req, res) => {
  try {
    const profits = profitData;

    res.render('dashboard', {
      profits,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err) 
      res.status(500).json(err)
  }
});


module.exports = router;