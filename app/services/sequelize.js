var Sequelize = require('sequelize');
var Config = require('../../config/environment');
var config = new Config;

// Create database connection
var db = new Sequelize(config.dbdialect + "://" + config.dbuser + ":" + config.dbpassword + "@" + config.dbhost + ":" + config.dbport + "/" + config.dbdatabase);

require("../models/users")(db, Sequelize);
require("../models/groups")(db, Sequelize);
require("../models/tourneytargets")(db, Sequelize);
require("../models/heroesStatic")(db, Sequelize);
require("../models/rankStatic")(db, Sequelize);
require("../models/heroes")(db, Sequelize);
require("../models/@relationships")(db, Sequelize);

module.exports = db;