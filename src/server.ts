import 'reflect-metadata'
import './database'

import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import passport from 'passport'

import { routes } from './routes'
const app: Application = express()
const port = 3000 || process.env.PORT
import createError from 'http-errors'

import { JwtStrategy } from './utils/auth'

app.use(express.json())
app.use(cors())
JwtStrategy(passport)
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

app.use(routes)

app.use((req, res, next) => {
    next(createError(404))
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        status: error.status,
        message: error.message,
        stack: error.stack
    })
})

try {
    app.listen(port, (): void => {
        console.log(`Server started successfully on port ${port}`)
    })
} catch (error) {
    console.error(`Error occured: ${error.message}`)
}
