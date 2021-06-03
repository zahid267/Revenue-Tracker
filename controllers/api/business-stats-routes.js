const router = require('express').Router();
const {Profit} = require('../../models');

//load profit data, make sure it has same properties
// Login route


router.get('/', async(req, res) => {
  try {
    const dbProfitData = await Profit.findAll({

    });

    const profits = dbProfitData.map((Profit) =>
    Profit.get({plain: true})
    );

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