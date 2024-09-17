import express from 'express'
import 'express-async-errors'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

export default app
