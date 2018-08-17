// import mongooes from "mongoose";
const mongooes = require('mongoose');

// Product Schema
var productSchema = mongooes.Schema({
    // _id: {
    //     type: String,
    //     required: true
    // },
    "Product Id": {
        type: Number,
        required: true
    },
    "Year": {
        type: Number,
        required: true
    },
    "Product line": {
        type: String,
        required: true
    },
    "Product type": {
        type: String,
        required: true
    },
    "Product": {
        type: String,
        required: true
    },
    "Order method type": {
        type: String,
        required: true
    },
    "Retailer country": {
        type: String,
        required: true
    },
    "Revenue": {
        type: Number,
        required: true
    },
    "Planned revenue": {
        type: Number,
        required: true
    },
    "Product cost": {
        type: Number,
        required: true
    },
    "Quantity": {
        type: Number,
        required: true
    },
    "Unit cost": {
        type: Number,
        required: true
    },
    "Unit price": {
        type: Number,
        required: true
    },
    "Gross profit": {
        type: Number,
        required: true
    },
    "Unit sale price": {
        type: Number,
        required: true
    }
    // ,
    // "Created date": {
    //     type: Date,
    //     default: Date.now
    // }
});

var Product = module.exports = mongooes.model('Product', productSchema);

// Get Product
module.exports.getProducts = function (callback, limit) {
    console.log('getting products');
    Product.find(callback).limit(limit);
};

// Get Product by Id
module.exports.getProductById = function (id, callback) {
    console.log("productId : " + id);
    console.log("productId : " + callback);
    // Product.findById((id), callback);
    Product.find(({ "Product Id": id }), callback);
    // Product.find({ "_id": ObjectId("5b224db45fe1581c48b6f1be") }, callback);
};

// Product findby field & value
module.exports.getProductByCondition = function (object, callback) {
    Product.find(object, callback)
};

// Add Product
module.exports.addProduct = function (product, callback) {
    Product.create(product, callback);
};

//Working
// Update Product
// module.exports.updateUsers = function (id, product, options, callback) {
//     var query = {
//         _id: id
//     };
//     var update = {
//         title: product.title,
//         author: product.author
//     };
//     Product.findOneAndUpdate(query, update, options, callback);
// };

// Delete Product
module.exports.deleteProduct = function (id, callback) {
    var query = {
        _id: id
    };
    Product.remove(query, callback);
};