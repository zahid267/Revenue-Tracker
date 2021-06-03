const router = require('express').Router();

const userRoutes = require('./user-routes');
const ownerRoutes = require('./owner-routes');
const dashboardRoutes = require('./business-stats-routes');

router.use('/users', userRoutes);
router.use('/owners', ownerRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
