const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res) =>  {
    res.json({"message":"Welcome!!"})
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


// connecting to the database for Jay Wood!
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewURLParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Recheck your connection dummy!');
    process.exit();
});


