const express = require('express')
const app = express()
const PORT = process.env.PORT ||5000
const dotenv = require('dotenv').config()
const {getGoals,setGoals,updateGoals,deleteGoals}= require('./controllers/goalsController')
const {errorHandler} = require('./middleware/errorMiddleware')

//two lines below enables you to read form input
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals', require('./routes/goals'))
app.use(errorHandler)

app.listen(PORT,()=>{`Server is up and running on localhost://${PORT}`})
