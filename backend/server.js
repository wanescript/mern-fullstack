const express = require('express')
const app = express()
const PORT = process.env.PORT ||5000
const dotenv = require('dotenv').config()
const {getGoals,setGoals,updateGoals,deleteGoals}= require('./controllers/goalsController')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')

//connect function for database.
connectDb()

//two lines below enables you to read form input
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//2 specific route endpoints below for goals and users.
app.use('/api/notes', require('./routes/notes'))
app.use('/api/users', require('./routes/userRoutes'))

//below is the async error handling middleware.
app.use(errorHandler)

app.listen(PORT,()=>{`Server is up and running on localhost://${PORT}`})
