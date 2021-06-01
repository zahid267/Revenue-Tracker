const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./customer-routes.js');
const businessOwnerRoutes = require('./business-routes.js');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const adminRoutes = require('./admin-routes')

router.use('/', homeRoutes);
router.use('/', productRoutes);
router.use('/api', apiRoutes);
router.use('/',businessOwnerRoutes)
router.use('/cart', cartRoutes);
router.use('/', adminRoutes)
//router.use('/products', productRoutes);
//router.use('/login', homeRoutes);

module.exports = router;
