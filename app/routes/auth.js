module.exports = function (app) {
    app.get('/auth/google',
        passport.authentication('google', { scope: ['email', 'profile'] }
        )
    );
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/auth/google/success',
            failureRedirect: '/auth/google/failure'
        })
    );

};