
const { Model, DataTypes, DATE } = require('sequelize');

const sequelize = require('../config/connection');

class Profit extends Model {}

// const isoDateString: string = datePickerDate.toISOString();

Profit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        profit: {
            type: DataTypes.DECIMAL(10,2),
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
            },
        // date: {
        //     type: 'TIMESTAMP',
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull: false
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profit',
    }
);

module.exports = Profit;