const express = require('express')
const http = require('http')
const {readdirSync} = require('fs')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || process.env.API_PORT


const app = express()
app.use(express.json())
app.use(cors())

readdirSync('./routes').map((r)=> app.use('/api', require(`./routes/${r}`)))

const server = http.createServer(app)
mongoose.connect(process.env.MONGO_URI).then(()=>{

    server.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT}`);
    })
}).catch((err)=>{
    console.log('database connect is failed');
    console.error(err)
})