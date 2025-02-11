import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './db/index.js'

const app = express()
const PORT = process.env.PORT || 30001

//external middleware
app.use(express.json());

//configuration
dotenv.config()

app.get('/', (req, res) => {
    res.send('Api Working');
})

//Database Connection
connectDb();

//Router imports
import healthCheckRouter from './routes/healthCheck.route.js'
import userRouter from './routes/userRoute.route.js'
import errorHandler from './middlewares/error.middleware.js'
import urlRouter from './routes/urlRoute.route.js'
import { handleRedirect } from './controllers/url.controller.js'
import verifyLogin from './middlewares/verifyLogin.middleware.js'

app.use('/api/v1/healthCheck', healthCheckRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/url', urlRouter);
app.use('/:shortId',  handleRedirect);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})