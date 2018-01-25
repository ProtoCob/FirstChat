// ProtoBot webhooks

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('port', (process.env.port || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())
app.use(express.static('public'))

// Spin up the server
app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})

// Index route
app.get('/', function (req, res) {
  res.send('Hello world, I am ProtoBot webhook.')
})

app.post('/booktable/', function (req, res) {
  console.log(JSON.stringify(req.body));
  // YOUR BOOKING CODE GOES HERE !!

var out = {
  "messages": [
    {"text": "Thanks for your booking!"},
    {"text": "See you soon!!"}
  ]
}

var outString = JSON.stringify(out);
console.log('Out:' + outString);

res.send(outString);
})

