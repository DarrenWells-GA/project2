const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path : 'config.env'})
const PORT = process.env.PORT || 3000

// log requests
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

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

app.listen(PORT, ()=> {console.log(`The server is running on http://localhost:${3000}`)})