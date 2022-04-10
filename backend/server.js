const express = require('express')
const app = express()
const PORT = process.env.PORT ||5000
const dotenv = require('dotenv').config()
const {getGoals,setGoals,updateGoals,deleteGoals}= require('./controllers/goalsController')

app.use('/api/goals', require('./routes/goals'))

app.listen(PORT,()=>{`Server is up and running on localhost://${PORT}`})
