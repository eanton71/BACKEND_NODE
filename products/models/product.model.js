'use strict'
const mongoose = require('../../common/services/mongoose.service').mongoose;
const productsSchema = new mongoose.Schema({
    name: {
        type:mongoose.Schema.Types.String

    },

    price: {
        type:mongoose.Schema.Types.Number

    },

    description: {

        type:mongoose.Schema.Types.String
    }
}, {versionKey:false})

productsSchema.set('toJSON', { virtuals: false });
const Products = mongoose.model('products', productsSchema, 'products');

exports.getProducts = () => {
    return new Promise((resolve, reject) => {
        Products.find({}).exec((error, result) => {
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
    try{
        const product = new Products(info); 
        return product.save().catch(error => { error.message });

    }catch(error){
        throw error.message;
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
// TODO buscar funcion en mongoose 

exports.putProduct = (data) => {
    return new Promise((resolve, reject) => {
       // Products.updateOne({ _id: data.id },{$set:{name:data.name,price:data.price,description:data.description}}).exec((error, result) => {
        Products.updateOne({ _id: data.id }, { $set:data}).exec((error, result) => {  
            if (error) {
                reject(error.message);
                throw error.message;
            }
            //OJO 
            if (result.modifiedCount) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }).catch(error => {
        throw error.message;
    })
}
