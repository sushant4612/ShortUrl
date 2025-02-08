import express from 'express'
import dotenv from 'dotenv'

const app = express()
const PORT = process.env.PORT || 30001

//configuration
dotenv.config()

app.get('/', (req, res) => {
    res.send('Api Working');
})

//Database Connection
connectDb();

//Router imports
import healthCheckRoute from './routes/healthCheck.route.js'
import { connect } from 'mongoose'
import { connectDb } from './db/index.js'
app.use('/api/v1/healthCheck', healthCheckRoute)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})