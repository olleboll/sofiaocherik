'use strict';

const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname + '/public'))

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

app.listen(3000, () => {
  console.log("listening on 3000")
})
