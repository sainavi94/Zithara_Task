const express = require('express');
const router = express.Router();
const { createCustomer,
    updateCustomer,
    getAllCustomerbyOrders
} = require('../controllers/customer');

router.post('/addCustomer', createCustomer);
router.put('/update/:customerId', updateCustomer);
router.get('/getAll', getAllCustomerbyOrders)

module.exports = router;