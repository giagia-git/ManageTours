const mongoose = require('mongoose');
const { schema } = require('./users');
const { Schema } = mongoose;

const schemaProduct = new Schema({
    nametour: String,
    img: {
        src: String
    },
    countProduct: Number,
    costProduct: Number
})

const Product = mongoose.model("product",schemaProduct);

module.exports = Product;