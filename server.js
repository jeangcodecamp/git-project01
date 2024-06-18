require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())



app.use((req, res,next)=>{
  res.status(404).json({ msg : 'resource not found'})
})

app.use((err,req,res,next)=> {
  res.json({err : err.message})
})

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on',port))
