const { Profit } = require('../models');

const profitData = [
  {
    profit: 10.00,
    product_id: 1,
    date: 2021-06-03
  }
];

const seedProfit = () => Profit.bulkCreate(profitData);

module.exports = seedProfit;