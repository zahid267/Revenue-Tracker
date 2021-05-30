const router = require('express').Router();
const {Product } = require('../models');


let cartData = [];
// GET all cart products for cartpage

router.get('/', async (req, res) => {
    try {
      
     // const dbProductData = req.session.cartData;   /// Get the cart products from the session
     /* const products = dbProductData.map((Product) =>
        Product.get({ plain: true })
      );*/
     // const products = JSON.parse(req.session.cartData);    /// cartData ia an array of json product objects
      const products = cartData
    
      res.render('cart', {
        products,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
// Add one Product to the cart record
router.get('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id, {
     
    });

    const product = dbProductData.get({ plain: true });
    product.quantity = 1;    /// Set a quantity of one for the add to cart product
    product.extended = product.price;
    cartData.push(product);
    req.session.cartData=cartData;
    //res.render('product', { product, loggedIn: req.session.loggedIn });
    
    console.log(req.session.cartData);

    res.status(200);
  //  return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
