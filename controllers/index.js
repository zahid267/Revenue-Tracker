const router = require('express').Router();

const apiRoutes = require('./api');
//const homeRoutes = require('./customer-routes.js');
const businessOwnerRoutes = require('./admin-routes');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const userlistroutes = require('./userlist-routes');
const productpurchaseroutes = require('./product-purchases-routes');
const dashboardRoutes = require('./dashboard-routes');

//router.use('/', homeRoutes);
router.use('/', productRoutes);
router.use('/api', apiRoutes);
router.use('/owner',businessOwnerRoutes)
router.use('/cart', cartRoutes);
router.use('/userlist', userlistroutes);
router.use('/productstats', productpurchaseroutes);
router.use('/dashboard', dashboardRoutes);
//router.use('/products', productRoutes);
//router.use('/login', homeRoutes);

module.exports = router;
////add Date to profit table
///make a new table with product_id, id, profit_id, price, quantity, date.