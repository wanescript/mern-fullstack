const express = require('express')
const app = express()
const PORT = process.env.key ||5000

app.get('/', (req,res)=> {
    res.send('home route')
    console.log('root route')
})

app.listen(PORT,()=>{`Server is up and running on localhost://${PORT}`})
