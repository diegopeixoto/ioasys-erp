import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const userSchema = Joi.object({
    user: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
})

export interface UserRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        user: string
        email: string
        password: string
        role: string
    }
}

export interface IUser {
    user: string
    email: string
    password: string
    role: string
}
