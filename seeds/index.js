const sequelize = require('../config/connection');
const seedProducts = require('./product-seeds');
const seedProfits = require('./profits-seed');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedProfits();
    console.log('\n----- PROFITS SEEDED -----\n');

    process.exit(0);
};

seedAll();