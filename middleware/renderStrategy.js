const passportJwt = require('passport-jwt');
const {jwt} = require('../config/keys');
const jwtExtract = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Создается объект, в котором лежит полученный токен с авторизации, в нем есть mail, id.
// Нужно для того, чтобы передать id на другие страницы, чтобы отображать что то именно для авторизованного пользователя по его id
const renderStrategy = passport => {
    const options = {
        jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(), // Будем брать токен, который находится в header
        secretOrKey: jwt
    };

    return passport.use(
         new JwtStrategy(options, async (payload, done) => {
             console.log(payload)
            try {
                const user = await User.findById(payload.userId).select('email id') // userId берется из токена, который мы получаем при авторизации

                if (!user) return done(null, false);

                return done(null, user)
            } catch (e) {
                console.log(e);
            }
        })
    )
};

module.exports = renderStrategy;