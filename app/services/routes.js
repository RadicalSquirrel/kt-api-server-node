var express = require('express');
var router = new express.Router();

module.exports = function (app, db) {
    //set up route handlers
    const Users = require('../routes/users')(db);
    const Get = require('../routes/@get')(db);
    const Auth = require('../routes/auth');
    // attach route handlers to express

    // ==== Generic Get Routes ====
    app.use('/users', Get);
    app.use('/groups', Get);
    app.use('/tourneytargets', Get);
    app.use('/heroes', Get);
    app.use('/heroesstatic', Get);
    app.use('/rankstatic', Get);

    // ==== Auth Routes ====
    app.use('/auth', Auth);
    app.use('/', router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    }));

    // ==== Patch Routes ====

    // 404 FUNCTION
    app.use(function (req, res) {
        res.status(404).json({"data" : { "error" : {"code" : 404, "message" : "HTTP ERROR: 404 page not found"}}});
    });
}
