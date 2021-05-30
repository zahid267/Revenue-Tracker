const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./customer-routes.js');
const businessOwnerRoutes = require('./business-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/',businessOwnerRoutes)

module.exports = router;
