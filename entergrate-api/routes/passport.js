const client = require('../config/auth').facebookAuth;
const FacebookStrategy = require('passport-facebook').Strategy;
const request = require('request');
const User = require('../models/user');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(user, done) {
        //If using Mongoose with MongoDB; if other you will need JS specific to that schema.
        User.findById(user.id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(
        new FacebookStrategy(
            {
                clientID: client.clientID,
                clientSecret: client.clientSecret,
                callbackURL: client.callbackURL,
                profileFields: ['emails', 'name']
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    await User.findOne(
                        { facebookID: profile.id },
                        async (err, user) => {
                            if (err) {
                                console.log(err);
                                return done();
                            }
                            if (user) {
                                return done(null, user);
                            } else {
                                const newUser = {
                                    fullName: `${profile.name.givenName} ${
                                        profile.name.familyName
                                    } `,
                                    email: profile.emails[0].value,
                                    facebookID: profile.id,
                                    bio: ' ',
                                    userGroup: '1',
                                    phoneNumber: ' ',
                                    password: Math.floor(
                                        Math.random() * 1100000 + 11000
                                    ),
                                    address: ' '
                                };
                                request(
                                    {
                                        url: 'http://localhost/api/users/',
                                        method: 'post',
                                        json: { ...newUser }
                                    },
                                    function(error, response, body) {
                                        if (error) {
                                            console.log('error', error);
                                            return done();
                                        }
                                        return done(null, body);
                                    }
                                );
                            }
                        }
                    );
                } catch (e) {
                    console.log(e);
                    return done();
                }
            }
        )
    );
};
