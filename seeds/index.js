const sequelize = require('../config/connection');
const seedProducts = require('./product-seed');
const seedProfits = require('./profits-seed');
const seedUsers = require('./user-seeds')

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedProfits();
    console.log('\n----- PROFITS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    

    process.exit(0);
};


seedAll();
