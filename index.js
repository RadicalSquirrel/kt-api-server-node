// Class Loading
const express = require('express'); // Framework
const bodyParser = require('body-parser'); // Parsing requests
const cors = require('cors'); // CORS support
const passport = require('passport'); // Auth
const https = require('https');
const fs = require('fs');

// Configurations
const Config = require('./config/environment'),
    config = new Config;
const corsOptions = {
    origin: config.cors
};
const certOptions = {
    pfx: fs.readFileSync(config.certfile),
    passphrase: config.certpassphrase
}

// Set up DB
const db = require('./app/services/sequelize');

// Set up Passport
require('./app/services/passport')(passport, db);

// Create express & set up
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors(corsOptions));
app.use(passport.initialize());
//app.use(passport.session());

// Set up routes
require('./app/services/routes')(app,db);

// listen

https.createServer(certOptions, app).listen(config.port);

console.log('listening on port : ' + config.port);