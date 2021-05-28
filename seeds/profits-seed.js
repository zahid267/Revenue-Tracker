const { Profits } = require('../models');

const profitData = [
  {
    cost: 10.99,
    sell_price: 20.99,
    profit: 10.00,
    product_id: 1
  }
];

const seedProfits = () => Profits.bulkCreate(profitData);

module.exports = seedProfits;