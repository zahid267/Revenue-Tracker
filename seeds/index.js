const sequelize = require('../config/connection');
const seedProducts = require('./product-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedProducts();

    await seedUsers();

    process.exit(0);
};

seedAll();