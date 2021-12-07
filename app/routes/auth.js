var passport = require('passport');

module.exports = function (app) {
    app.get('/google',
        passport.authenticate('google', { scope: ['email', 'openid'] })
    );
    app.get('/google/callback',
        passport.authenticate('google', {
            successRedirect: '/auth/google/success',
            failureRedirect: '/auth/google/failure'
        })
    );

};