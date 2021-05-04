const Router = require('./api/routes')

const express = require('express')


const bodyParser = require('body-parser');
const { json } = require('body-parser');


const app = express();

app.use(json())




app.get('/',(req,res)=>{

    res.status(200).send('Welcome');

})

app.use(Router)


app.listen(3000,()=>{
    console.log('running at localhost 3000');
})