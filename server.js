const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();
require('./db/connectdb');
const cors = require('cors');


const Product = require('./db/Schemas/products');
const User = require('./db/Schemas/users');

const user_router = require('./router/user');
const product_router = require('./router/product');
const api_router = require('./router/api');

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

/* Router */

app.set("view engine","html");

app.use('/user',user_router);
app.use('/product',product_router);
app.use('/api',api_router);


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

/* Database */
const saveDatabase = require('./controller/saveDatabase');

// if(saveDatabase('user',schemaUser,{account: "uyennhi",password: "uyennhi0908"})) {
//     console.log("Save is success!!");
// } else {
//     console.log("save not is failed");
// }


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
})