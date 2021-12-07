// Required Modules
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const passportConfig = require('../../config/passport.json');

// Function
module.exports = function (passport, db) {
    // serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // deserialize the user
    passport.deserializeUser((id, done) => {
        db.models.users.findByPk(id).then(user => {
            done(null, user);
        });
    });
    // Google Login ==========================================================
    passport.use(new GoogleStrategy({
        clientID: passportConfig.google.GOOGLE_CLIENT_ID,
        clientSecret: passportConfig.google.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://localhost:4000/auth/google/callback",
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done) {
        db.models.users.findOrCreate({ googleId: profile.id}).then( user => {
            return done(null, user);
        });
    }));
};
