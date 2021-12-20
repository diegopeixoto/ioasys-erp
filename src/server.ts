import 'reflect-metadata'

import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'

import { routes } from './routes'
const app: Application = express()
const port = 3000 || process.env.PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

app.use(routes)

try {
    app.listen(port, (): void => {
        console.log(`Server started successfully on port ${port}`)
    })
} catch (error) {
    console.error(`Error occured: ${error.message}`)
}
