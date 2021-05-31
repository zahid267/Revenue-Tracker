const router = require('express').Router();

const userRoutes = require('./user-routes');
const ownerRoutes = require('./owner-routes');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/cart', cartRoutes);
router.use('/products', productRoutes);

module.exports = router;
