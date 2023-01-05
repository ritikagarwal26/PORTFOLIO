
var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})