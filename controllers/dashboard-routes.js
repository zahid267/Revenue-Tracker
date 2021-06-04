const router = require('express').Router();
const sequelize = require('../config/connection');
const {Profit} = require('../models');
const {Product} = require('../models');

//load profit data, make sure it has same properties
// Login route


router.get('/', async(req, res) => {
  try {
    const dbProfitData = await Profit.findAll({
      include: [{model: Product}]
    });

    const totalProfit = await Profit.findAll({
      attributes: [
        'id',
        [sequelize.fn('sum', sequelize.col('profit')), 'total_profit'],
      ],
      group: ['id']
    })

    const profits = dbProfitData.map((Profit) =>
    Profit.get({plain: true})
    );

    console.log(profits);
    res.render('dashboard', {
      profits,
      totalProfit,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err) 
      res.status(500).json(err)
  }
});


module.exports = router;