const { Product } = require('../models');

const productData = [
  {
    product_name: 'Product1',
    price: 20.99,
    stock: 14
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
