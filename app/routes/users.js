const express = require('express');
const router = express.Router();
const Dashify = require('dashify');

var userRoute = db => {
    
    router.get('/', (req, res) => {
        console.log('Query:');
        console.log(req.query);
        var routename = req.originalUrl.replace(/\//g, "").toLowerCase();
        console.log("Route : " + routename);
        db.models.users.findAll().then((models) => {
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

    return router
}
module.exports = userRoute;