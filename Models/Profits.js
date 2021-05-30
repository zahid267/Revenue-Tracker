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
        profit: {
            type: DataTypes.DECIMAL,
            primaryKey: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
              references: {
                model: 'product',
                key: 'id',
              },
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