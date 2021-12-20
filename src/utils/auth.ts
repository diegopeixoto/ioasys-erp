import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserService } from '../services/UserService'

const userService = new UserService()
export const strategy = (passport) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }
    passport.use(
        new Strategy(options, (payload, done) => {
            userService
                .findOne({ username: payload.user.user })
                .then((user) => {
                    if (user) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
                .catch((err) => done(err, null))
        })
    )
}
