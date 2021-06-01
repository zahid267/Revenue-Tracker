const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    cost: 10.00
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    cost: 60.99
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    cost: 10.99
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    cost: 6.99
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    cost: 15.99
  },
  {
    product_name: 'Product1',
    price: 20.99,
    stock: 14,
    cost: 10.99
  },
  {
    product_name: 'Product 2',
    price: 24.99,
    stock: 14,
    cost: 15.99
  },
  {
    product_name: 'Product 3',
    price: 29.99,
    stock: 20,
    cost: 19.99
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;