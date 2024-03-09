require('express-async-errors')
require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')
const fileUploader = require('express-fileupload')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors');
const cloudinary = require('cloudinary').v21


// routes 
const AuthRoute = require('./routes/authRoute') 



// middlewares
app.use(fileUploader({useTempfiles: true}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser(process.env.COOKIE))
app.use(morgan('tiny')) 



const port = process.env.PORT || 5000


const startapp = async() => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL
        )
        app.listen(port, console.log(`app is listening to port ${port}...`))
    } catch (error) {
        console.log(error.message);
    }
}

startapp()