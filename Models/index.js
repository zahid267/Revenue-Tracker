//importing models
const Product = require('./Product');
const Profits = require('./Profits')

//say what belongs to what here (18:31)
Profits.belongsTo(Product, {
    foreignKey: 'product_id',
})

Product.belongsTo(Profits, {
    foreignKey: 'product_id',
})



module.exports = {
    Product,
    Profits
};