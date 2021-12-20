import createError from 'http-errors'

export class Validator {
    header(headers) {
        if (!headers['x-client-id']) {
            throw createError(400, 'Invalid Payload')
        } else if (headers['x-client-id'] !== process.env.CLIENT_ID) {
            throw createError(400, 'Invalid Client')
        }

        return true
    }
}
