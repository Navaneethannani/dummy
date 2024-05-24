const express = require('express')
const { Sequelize } = require('sequelize')

const app = express()

const db = require('./config/dbConfig')


const port = 2000

app.listen(port,()=>{
    console.log("server port 2000 connected successfully")
})