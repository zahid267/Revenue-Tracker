const router = require('express').Router();
const {Product } = require('../models');


let cartData = [];
// GET all cart products for cartpage

router.get('/list/', async (req, res) => {
    try {
      cartData = JSON.parse(localStorage.getItem("cartData"));
      const cartCnt = cartData.length;
      let cartTotal = 0.00;
      for(var i=0; i<cartData.length;i++){
        cartTotal += cartData.quantity*cartData.price;
      }
      const products = cartData;
      console.log(cartCnt+ " ==== " + cartTotal);
      console.log(products);
      res.render('cart', {
        products,
        cartCnt,
        cartTotal,
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
    const cartCnt = cartData.length;
    //localStorage.setItem("cartData", JSON.stringify(cartData));
    
    console.log("cartCnt : " + cartCnt);
    res.render('product-list', {
      // layout: 'main', <--- if you don't specify a layout, it will default to this
      //products: product,
      cartCnt: cartCnt,
      loggedIn: req.session.loggedIn
    });
    
    //console.log(req.session.cartData);

    res.status(200);
  //  return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
