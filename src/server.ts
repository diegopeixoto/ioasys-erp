import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()
const port = 3000 || process.env.PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Welcome!'
    })
})

try {
    app.listen(port, (): void => {
        console.log(`Server started successfully on port ${port}`)
    })
} catch (error) {
    console.error(`Error occured: ${error.message}`)
}
