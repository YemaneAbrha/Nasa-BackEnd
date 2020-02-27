require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const db = process.env.MONGODB_URL;
// mongodb + srv://yemane:yemane@newcluster-vevfg.mongodb.net/test?retryWrites=true&w=majority
const app = express()
// mongodb + srv://yemane:yemane@newcluster-vevfg.mongodb.net/test?retryWrites=true&w=majority
// mongodb + srv://yemane:yemaneabrha@newcluster-vevfg.mongodb.net/test?retryWrites=true&w=majority
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/uploads', express.static('uploads'));
const DB_URI = process.env.DB_URI
//Database

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to nasa acadamy'
    });
})
app.use('/events', require('./api/event'))
app.use('/messages', require('./api/message'))
const port = process.env.PORT
const env = process.env.NODE_ENV

app.listen(port, () => { console.log(`Server Started at ${port}`) });