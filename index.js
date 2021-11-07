var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var Config = require('./config/environment'),
    config = new Config;
var corsOptions = {
    origin: config.cors
};

// Create express & set up
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors(corsOptions));

// Set up DB

const db = require('./app/services/sequelize');

// Set up routes
require('./app/services/routes')(app,db);


app.listen(config.port);
console.log('listening on port : ' + config.port);