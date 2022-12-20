'use strict'

const ProductController = require('../controllers/product.controller');

exports.productRoutes = function (app) {
    app.get('/api/get_products', ProductController.getAllProducts);
    app.post('/api/add_product', ProductController.addProduct);
    app.delete('/api/delete_product/:id', ProductController.deleteProduct);
    //rsapp.put('/api/put_product/:id', ProductController.putProduct);
}