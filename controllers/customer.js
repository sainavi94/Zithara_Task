const Customer = require('../models/customer_model');
const { Op } = require('sequelize');

const createCustomer = async (req, res) => {
    try {
        const payload = req.body;
        const data = await Customer.create(payload);
        res.status(201).send({
            status: 'SUCCESS',
            data
        })
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: error.message
        })
    }

};

const updateCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const payload = req.body;
        const customer = await Customer.update(payload, {
            where: { id: customerId }
        });

        if (customer[0] === 1) {
            const updatedCustomer = await Customer.findOne({
                where: { id: customerId }
            })
            res.status(200).send({
                status: 'SUCCESS',
                data: updatedCustomer
            })

        }
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: error.message
        })
    }
};

const getAllCustomerbyOrders = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            where: {
                total_orders: { [Op.gt]: 5 },
                [Op.or]: [
                    { name: { [Op.like]: '%mangesh%' } },
                    { email: { [Op.like]: '%@gmail%' } }
                ]
            },
            order: [
                ['id', 'ASC']
            ],
            limit: 10,
            offset: 20
        });
        res.status(200).send({
            status: 'SUCCESS',
            data: customers
        })
    } catch (error) {
        res.status(500).send({
            status: 'FAILED',
            message: error.message
        })
    }

}
module.exports = {
    createCustomer,
    updateCustomer,
    getAllCustomerbyOrders

}