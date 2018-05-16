'use strict'

require('dotenv').config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const routes = require('./routes')

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/', routes)

app.listen(3000, () => {
  console.log("listening on 3000")
})
