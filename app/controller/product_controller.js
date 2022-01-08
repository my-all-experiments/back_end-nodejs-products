const Product = require('../models/product_model');

// Create and Save a new Product
exports.add = (req, res) => {
    // // Validate request
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "Product name can not be empty"
        });
    }
    else if(!req.body.category) {
        return res.status(400).send({
            message: "Product category can not be empty"
        });
    }

    else if(!req.body.price) {
        return res.status(400).send({
            message: "Product price can not be empty"
        });
    }
    else if(!req.body.company) {
        return res.status(400).send({
            message: "Product company can not be empty"
        });
    }
    else if(!req.body.user_id) {
        return res.status(400).send({
            message: "user_id can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        name: req.body.product_name, 
        category: req.body.category,
        price:req.body.price,
        company:req.body.company,
        user_id:req.body.user_id
    });

    // Save Product in the database
    product.save()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the product."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Product.find(req.body)
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};
