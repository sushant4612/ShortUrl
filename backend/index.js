import express from 'express'
import ApiResponse from './utils/ApiResponse.js'

const app = express()
const PORT = process.env.PORT || 30001

app.get('/', (req, res) => {
    res.send('Api Working');
})

//Router imports
import healthCheckRoute from './routes/healthCheck.route.js'
app.use('/api/v1/healthCheck', healthCheckRoute)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})