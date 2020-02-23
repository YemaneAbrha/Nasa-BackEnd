require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const DB_URI = process.env.DB_URI
//Database

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to nasa acadamy'
    });
})
app.use('/events', require('./api/event'))
const port = process.env.PORT
const env = process.env.NODE_ENV

app.listen(port, () => { console.log(`Server Started at ${port}`) });