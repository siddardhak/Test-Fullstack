const express = require('express');

const router = express.Router();


router.get('/api/users',(req,res)=>{
    res.status(200).send({
        User:'Siddardha'
    })
})

module.exports = router