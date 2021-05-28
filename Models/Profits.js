const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Profits extends Model {}

Profits.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cost: {
            type: DataTypes.DECIMAL,
            primaryKey: true,
            allowNull: false,
        },
        sell_price: {
            type: DataTypes.DECIMAL,
            primaryKey: true,
            allowNull: false,
        },
        profit: {
            type: DataTypes.DECIMAL,
            primaryKey: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profits',
    }
);

module.exports = Profits;