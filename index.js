const Router = require('./api/routes')

const express = require('express')

const bodyParser = require('body-parser');

const { json } = require('body-parser');

const mongoDB = require('mongodb').MongoClient;



const app = express();

app.use(json());




mongoDB.connect('', { useUnifiedTopology: true }).then((db, err) => {
    console.log(db)
}).catch(err => {
    console.log(err)
})

app.get('/', (req, res) => {

    res.status(200).send('Welcome');

})

app.use(Router)


app.listen(3000, () => {
    console.log('running at localhost 3000');
})