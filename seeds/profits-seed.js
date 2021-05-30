const { Profits } = require('../models');

const profitData = [
  {
    profit: 10.00,
    product_id: 1
  }
];

const seedProfits = () => Profits.bulkCreate(profitData);

module.exports = seedProfits;