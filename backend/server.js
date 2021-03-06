const express = require('express')
const path = require('path')
const port = process.env.PORT ||5000
const dotenv = require('dotenv')
dotenv.config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')


//connect function for database.
connectDb()

const app = express()
//two lines below enables you to read form input
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//2 specific route endpoints below for goals and users.
app.use('/api/notes', require('./routes/notes'))
app.use('/api/users', require('./routes/userRoutes'))


//Serve frontend to run a build on your react app
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, '../', 'frontend','build','index.html')))
}else {
    app.get('/', (req,res)=> res.send('Please set to production'))
}

//below is the async error handling middleware.
app.use(errorHandler)

app.listen(port,()=>{`Server is up and running on localhost://${port}`})
