var http = require('http')
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var methodOverride = require('method-override')
var session = require('express-session')
var bodyParser = require('body-parser')



var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.use(favicon(path.join(__dirname, '/asset/favicon.ico')))
app.use(logger('dev'))
app.use(methodOverride())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

var server = http.createServer(app)
console.log("hello world")


server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})