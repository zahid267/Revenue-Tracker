const router = require('express').Router();

const apiRoutes = require('./api');
//const homeRoutes = require('./customer-routes.js');
//const businessOwnerRoutes = require('./business-routes.js');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
<<<<<<< HEAD
const adminRoutes = require('./admin-routes')
const dashboardRoutes = require('./business-stats-routes');
=======

>>>>>>> b37c7ddb2d8178ef71c54a36d3700b34be4f7c58

//router.use('/', homeRoutes);
router.use('/', productRoutes);
router.use('/api', apiRoutes);
//router.use('/owner',businessOwnerRoutes)
router.use('/cart', cartRoutes);
<<<<<<< HEAD
router.use('/owner', adminRoutes)
router.use('/', dashboardRoutes);
=======

>>>>>>> b37c7ddb2d8178ef71c54a36d3700b34be4f7c58
//router.use('/products', productRoutes);
//router.use('/login', homeRoutes);

module.exports = router;
////add Date to profit table
///make a new table with product_id, id, profit_id, price, quantity, date.