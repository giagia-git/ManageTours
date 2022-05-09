const { default: axios } = require('axios');
const { response } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const saveDatabase = require('../controller/saveDatabase');
const User = require('../db/Schemas/users');

router
.get('/', (req,res) => {
    return res.send("GET /");
})
.post("/", (req,res) => {
    return res.send("POST /")
});

router
.get('/create', (req,res) => {
    return res.send("GET /create");
})
.post('/create', (req,res) => {
    return res.send("POST /create");
})

router
.get('/signup',(req,res) => {
    return res.send("get");
})
.post('/signup',async (req,res,next) => {
    const findUser = await User.find({account: req.body.account});
    if(findUser.length<=0) {
        const doc = new User({account: req.body.account, password: req.body.password});
        if(doc.save()) {
            console.log("Save is database success!");
        } else {
            console.log("Save data is failed")
        }
        return res.status(200).send("Save database is success!!");
    }
    return res.status(404).send("Failed!");
})

router
.get('/api', (req,res) => {
    res.send("haha");
})
.post('/api', (req,res) => {
    // console.log(req.body);
    return res.send("hihi");
})

router
.get('/signin',(req,res) => {
    return res.json({

    })
})
.post('/signin', async (req,res,next) => {
    console.log(req.body);
    const findUser = await User.find({account: req.body.account, password: req.body.password});
    if(findUser.length>0) {
        return res.status(200).redirect(`http://localhost:5500/?username=${req.body.account}`);
    } else {
        return res.send("Truy cap khong thanh cong");
    }
})


module.exports = router;
