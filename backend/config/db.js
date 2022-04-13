const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const dbConnected = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${dbConnected.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB