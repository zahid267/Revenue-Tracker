const router = require('express').Router();

const userRoutes = require('./user-routes');
const ownerRoutes = require('./owner-routes');
// const dashboardRoutes = require('../dashboard-routes');
// const productpurchaseroutes = require('../product-purchases-routes')
// const userlistroutes = require('./userlist-routes');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
// router.use('/productstats', productpurchaseroutes);



module.exports = router;
