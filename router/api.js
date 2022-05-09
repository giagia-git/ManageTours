const express = require('express');
const router = express.Router();
const result = require('../api/api');


router.get('/', (req,res) => {
    result
    .then(value => {
        res.status(200).json({
            status: 'success',
            body: value.data
        })
    })
    .catch(err => res.send(err));
});

module.exports = router;
