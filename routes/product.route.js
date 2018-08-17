const express = require('express');
const router = express.Router();
const productService = require('../service/product.service');

// Products Routes
router.get('/products', (req, res) => {
    console.log("GET " + req.body)
    console.log(req.param)
    // console.log(res)
    Product.getProducts((err, products) => {
        if (err) throw err;
        res.json(products);
    }, 1000);
});
router.post('/products', (req, res) => {
    console.log("POST " + req.body)
    console.log(req.param)
    let limit = req.body.limit;
    console.log(limit)
    // console.log(res)
    Product.getProducts((err, products) => {
        if (err) throw err;
        res.json(products);
    }, limit);
});

router.post('/product', (req, res) => {
    try {
        Product.getProductById(req.body.productId, (err, product) => productService.checkProduct(err, product));
    } catch (error) {
        res.json(error);
    }
    // try {
    //     Product.getProductById(req.body.productId, (err, product) => {
    //         console.log("P " + product)
    //         console.log("E " + err)
    //         if (err) res.json(err);
    //         res.json(product);
    //     });
    // } catch (error) {
    //     res.json(error);
    // }
});

router.post('/product/login', (req, res) => {
    console.log(req.body);
    Product.getProductByCondition(req.body, (err, product) => {
        console.log("err " + err);
        console.log("product " + product.length);
        if (err) throw err;
        if (product && product.length > 0)
            res.json(product);
        else
            res.json(false);
    });
});

router.post('/product', (req, res) => {
    var product = req.body;
    Product.addProduct(product, (err, product) => {
        if (err) throw err;
        res.json(product);
    });
});
router.put('/product/:id', (req, res) => {
    var id = req.params.id;
    var product = req.body;
    Product.updateProduct(id, product, {}, (err, product) => {
        if (err) throw err;
        res.json(product);
    });
});

router.delete('/product/:id', (req, res) => {
    var id = req.params.id;
    Product.deleteProduct(id, (err, genre) => {
        if (err) throw err;
        res.json(genre);
    });
});


module.exports = router;