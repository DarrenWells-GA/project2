
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(DATABASE_URL, CONFIG)

const app = express();

// dotenv.config({ path : 'config.env'})
const PORT = process.env.PORT || 3000

// log requests
app.use(morgan('tiny'));

// my parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true}))

// set the view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> {console.log(`The server is running on http://localhost:${PORT}`)})