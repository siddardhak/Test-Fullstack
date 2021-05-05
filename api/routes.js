const express = require('express');

const router = express.Router();


router.get('/login',(req,res)=>{

    // Send the login page

    res.status(200).send({
        page:'Login'
    });
});

router.get('/logout',(req,res)=>{
    // Token will expire here
    res.status(200).redirect('/')
})



module.exports = router