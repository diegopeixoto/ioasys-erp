import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const occupationSchema = Joi.object({
    occupation: Joi.string().required(),
    wage: Joi.number().required()
})

export interface OccupationRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        occupation: string
        wage: number
    }
}

export interface IOccupation {
    occupation: string
    wage: number
}
