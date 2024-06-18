require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/not-found')
const app = express()

app.use(cors())
app.use(express.json())





app.use(notFound)

app.use((err,req,res,next)=> {
  res.json({err : err.message})
})

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on',port))
