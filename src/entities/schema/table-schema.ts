import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const occupationSchema = Joi.object({
    table_number: Joi.number().required(),
    chairs: Joi.number().required(),
    vip: Joi.boolean().required()
})

export interface OccupationRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        table_number: number
        chairs: number
        vip: boolean
    }
}

export interface IOccupation {
    table_number: number
    chairs: number
    vip: boolean
}
