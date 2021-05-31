const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Owner = require('./Owner');
const Product = require('./Product.js');
const Profit = require('./Profits')

//say what belongs to what here (18:31)
Profit.belongsTo(Product, {
    foreignKey: 'product_id',
})

Product.belongsTo(Profit, {
    foreignKey: 'product_id',
})




module.exports = { Owner, User, Gallery, Painting, Product,
  Profit };
