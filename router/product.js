const express = require('express');
const router = express.Router();

router
.get('/', (req,res) => {
    console.log("GET /");
})
.post('/', (req,res) => {
    console.log("POST /");
})

module.exports = router;