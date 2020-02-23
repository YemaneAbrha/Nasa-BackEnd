require('dotenv')
const mongoose = require('mongoose')
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_USERNAME
const DB_HOST = process.env.DB_HOST
const DATABASE = process.env.DATABASE
const env = process.env.NODE_ENV
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));
module.exports = mongoose;