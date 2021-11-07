// Magic Get Route

const express = require('express');
const router = express.Router();
const Dashify = require('dashify');

var getRoute = db => {

    router.get('/', (req, res) => {
        console.log('Query:');
        console.log(req.query);
        var routename = req.originalUrl.replace(/\//g, "").toLowerCase();
        console.log("Route : " + routename);
        db.models[routename].findAll().then((models) => {
            var jsonObject = { "data": [] }
            if (models.length === 0) res.status(200).json(jsonObject); // if no rows exist
            else {
                for (var i = 0; i < models.length; i++) {
                    jsonObject.data.push({
                        "type": routename,
                        "id": models[i].dataValues.id,
                        "attributes": {}
                    });
                    rowskeys = Object.keys(models[i].dataValues);
                    for (var a = 0, len = rowskeys.length; a < len; a++) {
                        var dashed = Dashify(rowskeys[a]).toLowerCase();
                        if (rowskeys[a] !== 'password') {
                            jsonOBject.data[i].attributes[dashed] = models[i].dataValues[rowskeys[a]];
                        }
                    }
                }
                console.log('Response:');
                console.log(jsonObject.data);
                res.status(200).json(jsonObject);
            }
        });
    });

    router.get('/:id', (req, res) => {
        console.log('Query:');
        console.log(req.query);
        var routename = req.originalUrl.split('/')[1].toLowerCase(); // Find what API we should be dealing with by splitting the url by / and taking the 2nd object (first one is null)
        console.log("Route : " + routename);
        console.log("id : " + req.params.id)
        db.models[routename].findByPk(req.params.id).then(function (model) {
            if (typeof model === "undefined") {
                res.status(204).json();
            }
            else {
                var jsonObject = { // create json response object
                    "data": {
                        "type": routename, // name of the file this is in
                        "id": model.dataValues.id,
                        "attributes": {} // set attributes to a blank object for now in order to allow adding new keys to it
                    },
                    "relationships": {}
                }
                rowskeys = Object.keys(model.dataValues); // set the keys into an array for dynamic changing
                for (var a = 0, len = rowskeys.length; a < len; a++) { // add attributes dynamically according to returned fields from database
                    var dashed = Dashify(rowskeys[a]).toLowerCase(); // Replace underscores in key names with dashes
                    jsonObject.data.attributes[dashed] = model.dataValues[rowskeys[a]] // Set attribute using no dash as the name, and the original value
                }
                console.log('Response:');
                console.log(jsonObject.data);
                res.status(200).json(jsonObject); // send data object with 200/OK
            }
        });
    });

    return router
}
module.exports = getRoute;