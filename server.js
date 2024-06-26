require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-middleware')
const userRoute = require('./routes/user-route')
const authRoute = require('./routes/auth-route')

const app = express()

// general middleware
app.use(cors())
app.use(express.json())

// app routing middleware
app.use('/auth', authRoute)
app.use('/user', userRoute)

// default not-found & error middleware
app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on',port))
