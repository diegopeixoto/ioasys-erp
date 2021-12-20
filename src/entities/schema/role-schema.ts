import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const roleSchema = Joi.object({
    role: Joi.string().required()
})

export interface RoleRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        role: string
    }
}

export interface IRole {
    role: string
}
