// import mongooes from "mongoose";
const mongooes = require('mongoose');

// Customer Schema
var customerSchema = mongooes.Schema({
    "ite_code": String,
    "group_code": String,
    "group_name": String,
    "family_code": String,
    "family_name": String,
    "class_code": String,
    "class_name": String,
    "commodity_name": String,
    "active_int": String,
    "inventory_item": String,
    "group1_name": String,
    "group2_name": String,
    "group3_name": String,
    "group4_name": String,
    "ite_name": String,
    "commodity_code": String,
    "ite_unit": String
});

var Customer = module.exports = mongooes.model('Customer', customerSchema);

// Get Customer
module.exports.getCustomer = function (callback, limit) {
    console.log('model : cusromer callback ' + callback);
    console.log('model : cusromer limit ' + limit);
    Customer.find(callback).limit(limit);
};

// Find Customer by Id
module.exports.getCustomerDetails = function (callback, limit) {
    var query = {
        _id: id
    };
    Customer.find(query, callback);
};

// Add Customer
module.exports.addCustomer = function (customer, callback) {
    Customer.create(customer, callback);
};

// Update Customer
module.exports.updateCustomer = function (id, customer, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        name: customer.name
    };
    Customer.findOneAndUpdate(query, update, options, callback);
};

// Delete Customer
module.exports.deleteCustomer = function (id, callback) {
    var query = {
        _id: id
    };
    Customer.remove(query, callback);
};