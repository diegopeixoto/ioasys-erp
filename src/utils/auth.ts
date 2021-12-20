import createError from 'http-errors'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserService } from '../services/UserService'

const userService = new UserService()
// export const Strategy = async (passport) => {
//     const options: any = {}
//     options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//     options.secretOrKey = process.env.JWT_SECRET
//     try {
//         passport.use(
//             new Strategy(options, async (payload) => {
//                 const user = await userService.findOne({ username: payload.user.user })
//                 return user
//             })
//         )
//     } catch (error) {
//         throw createError(500, error)
//     }
// }

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
