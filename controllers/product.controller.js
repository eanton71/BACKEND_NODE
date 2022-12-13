'use strict'

const productModel = require('../models/product.model');
exports.getAllProducts = (request, response) => {

    console.log('received getAllproducts request');
    productModel.getProducts().then((products, error) => {
        if (error) {
            throw error.message;
        }
        if (products) {
            return response.status(290).send(products);
        } else {
            return response.status(204);
        }
    }).catch(error => {
        throw error.message;
    })
}