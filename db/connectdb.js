const mongoose = require('mongoose');
const { Schema } = require('mongoose');

let connectMongoAtlats = mongoose.connect(process.env.DB_CONNECTION);
connectMongoAtlats
.then(() => {
    console.log("Connect database is success!!");
})
.catch(err => console.log(err));

module.exports = connectMongoAtlats;