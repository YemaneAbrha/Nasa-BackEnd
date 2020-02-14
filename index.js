require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')



const app = express()


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const port = process.env.PORT
const env = process.env.NODE_ENV

app.listen(port, () => { console.log(`Server Started at ${port}`) });