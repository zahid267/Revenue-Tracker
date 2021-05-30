const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

const productRoutes = require('./product-routes.js');
const cartRoutes = require('./cart-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
