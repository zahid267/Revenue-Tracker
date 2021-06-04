const router = require('express').Router();

const userRoutes = require('./user-routes');
const ownerRoutes = require('./owner-routes');
const dashboardRoutes = require('./business-stats-routes');
const productpurchaseroutes = require('./product-purchases-routes')

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/productstats', productpurchaseroutes);

module.exports = router;
