const express = require('express')
const process = require('process')
const app = express()

app.get('/', function (req,res){
    res.send('This Express app was executed by Node.js')
})

app.listen(3000)  