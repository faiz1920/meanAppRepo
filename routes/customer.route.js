const express = require('express');
const router = express.Router();

// Customer Routes
// Get Customer
router.get('/customers', (req, res) => {
    console.log('route : customer');
    Customer.getCustomer((err, customer) => {
        if (err) throw err;
        res.json(customer);
    }, 1000);
});

// Add Customer
router.post('/customer', (req, res) => {
    var customer = req.body;
    Customer.addCustomer(customer, (err, customer) => {
        if (err) throw err;
        res.json(customer);
    });
});

// Add Customers
router.post('/customers', (req, res) => {
    var customers = req.body;
    for (let i in customers) {
        Customer.addCustomer(customers[i], (err, customer) => {
            if (i === customers.length - 1) {
                if (err) throw err;
                res.json(customer);
            }
        });
    }
});

// Update Customer
router.put('/customer/:id', (req, res) => {
    var id = req.params.id;
    var customer = req.body;
    Customer.updateCustomer(id, customer, {}, (err, customer) => {
        if (err) throw err;
        res.json(customer);
    });
});

// Delete Customer
router.delete('/customer/:id', (req, res) => {
    var id = req.params.id;
    Customer.deleteCustomer(id, (err, customer) => {
        if (err) throw err;
        res.json(customer);
    });
});

// Find Customer by Id
router.post('/customer/:id', (req, res) => {
    console.log("find by id");
    var id = req.params.id;
    Customer.getCustomerDetails(id, (err, customer) => {
        if (err) throw err;
        res.json(customer);
    });
});


module.exports = router;