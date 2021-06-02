const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./customer-routes.js');
const businessOwnerRoutes = require('./business-routes.js');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const adminRoutes = require('./admin-routes')
const dashboardRoutes = require('./business-stats-routes');

router.use('/', homeRoutes);
router.use('/', productRoutes);
router.use('/api', apiRoutes);
router.use('/owner',businessOwnerRoutes)
router.use('/cart', cartRoutes);
router.use('/owner', adminRoutes)
router.use('/', dashboardRoutes);
//router.use('/products', productRoutes);
//router.use('/login', homeRoutes);

module.exports = router;
