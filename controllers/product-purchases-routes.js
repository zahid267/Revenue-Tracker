const router = require('express').Router();
const {Profit} = require('../models');
const {Product} = require('../models');

//load profit data, make sure it has same properties
// Login route


router.get('/', async(req, res) => {
  try {
    const dbProductData = await Product.findAll({
      include: [{model: Profit}]
    });

    const product = dbProductData.map((Product) =>
    Product.get({plain: true})
    );

    console.log(product);
    res.render('productpurchases', {
      product,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err) 
      res.status(500).json(err)
  }
});


module.exports = router;