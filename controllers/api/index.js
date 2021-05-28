const router = require('express').Router();

const userRoutes = require('./user-routes');
const ownerRoutes = require('./owner-routes');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;
