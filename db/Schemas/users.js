const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaUser = new Schema({
    account: String,
    password: String
});

const User = mongoose.model("user",schemaUser);

module.exports = User;