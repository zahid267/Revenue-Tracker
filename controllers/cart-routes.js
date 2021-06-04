const router = require('express').Router();
const {Product, Profit} = require('../models');


let cartData = [];
// GET all cart products for cartpage

router.get('/list/', async (req, res) => {
    try {
      let cTotal = 0;
      for(var i=0; i<cartData.length;i++){
        cTotal += parseFloat(cartData[i].extended);
      }
      const products = cartData;
      const cartTotal = cTotal;
    //  console.log(cartCnt+ " ==== " + cartTotal);
      //console.log(products);
      
        res.render('cart', {
          products,
          cartTotal,
          loggedIn: req.session.loggedIn,
        });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.get('/checkout/', async (req, res) => {
      let cTotal = 0;
      for(var i=0; i<cartData.length;i++){
        const productid = cartData[i].id;
        const profit = parseFloat(cartData[i].price)-parseFloat(cartData[i].cost);
        try {
          const dbProfitData = await Profit.create({
            profit : profit,
            product_id : productid,
          });
          
        } catch (err) {
          console.log(err);
        //  res.status(500).json(err);
        }
      }

      for(var i=0; i<cartData.length;i++){
        const productid = cartData[i].id;
        const dbProductData = await Product.findByPk(productid, {
      
        });
    
        const productRec = dbProductData.get({ plain: true });

        productRec.stock = parseInt(productRec.stock) - 1;
        try {
          const productData = await Product.update(productRec, {
            where: {
              id: productid,
            },
          });
          if (!productData[0]) {
            res.status(404).json({ message: 'No product with this id : '+productid });
          
          }
          
          //res.status(200).json(productData);
        } catch (err) {
          console.log(err);
         // res.status(500).json(err);
        }
      }

      for(var i=0; i<cartData.length;i++){
        cartData.splice(i, 1);
      }
      cartData.splice(0, 1);

      res.redirect('/'); 
    
  });
  router.get('/delete/:id', async (req, res) => {
    let cTotal = 0;
    let delno = null;
    //console.log("here in cart delete");
    for(var i=0; i<cartData.length;i++){
      if(cartData[i].id==req.params.id){
        delno = i;
        i = cartData.length+1;
      }
    }
    if (delno !== null) {
      cartData.splice(delno, 1);
    }
 // res.redirect('/list'); 
    for(var i=0; i<cartData.length;i++){
      cTotal += parseFloat(cartData[i].extended);
    }
    const products = cartData;
    const cartTotal = cTotal;
    res.render('cart', {    /// go back to the cart list page
      products,
      cartTotal,
      loggedIn: req.session.loggedIn,
    });
  
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
   /* req.session.save(() => {
        req.session.cartData = cartData;
      });*/
    
    //console.log("cartCnt : " + cartCnt);
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
