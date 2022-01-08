const express = require('express');
const cors=require("cors");
// create express app
const app = express();

// Configuring the database
const dbConfig = require('./config/database_config');
const mongoose = require('mongoose');

// Require Users routes
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
require('./app/routes/user_routes')(app);
require('./app/routes/account_routes')(app);
require('./app/routes/product_routes')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// listen for requests
app.listen(4000, () => {
    console.log("Server is listening");
});