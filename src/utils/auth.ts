import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserService } from '../services/UserService'

const userService = new UserService()
export const JwtStrategy = (passport) => {
    const options: any = {}
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    options.secretOrKey = process.env.JWT_SECRET
    passport.use(
        new Strategy(options, (payload, done) => {
            userService.findOne({ username: payload.user }),
                (err, user) => {
                    if (err) return done(err, false)
                    if (user) {
                        return done(null, {
                            username: user.user
                        })
                    }
                    return done(null, false)
                }
        })
    )
}
