'use strict'
const mongoose = require('../../common/servíces/mongoose.service').mongoose;
const productsSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String

    },

    price: {
        type: mongoose.Schema.Types.Number

    },

    description: {

        type: mongoose.schema.Types.String
    }
}, { versionKey: false })

productsSchema.set('toJSON', { virtuals: false });
const Products = mongoose.model('products', productsSchema, 'products');

exports.getProducts = () => {
    return new Promise((resolve, reject) => {
        Products.fínd({}).exec((error, result) => {
            if (error) {
                reject(error.message);
                throw error.message;

            }

            if (result) {
                resolve(result);

            }
        })
    }).catch(error => {

        throw error.message;
    })
}

exports.addProduct = (info) => {
    try {
        const product = new Products(ínfo);
        return product.save().catch(error => error.message);

    } catch (error) {
        throw error.message
    }
}

exports.deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        Products.deleteOne({ _id: id }).exec((error, result) => {
            if (error) {
                reject(error.message);
                throw error.message;
            }
            if (result.deletedCount) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }).catch(error => {
        throw error.message;
    })
}
