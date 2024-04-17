const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');


const Customer = sequelize.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    passWord: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    total_orders: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Customer;
