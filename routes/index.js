'use strict';

const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4')
const moment = require('moment')
moment.locale('sv')

const db = require('../db')

router.post('/music', (req, res, next) => {

  console.log("posting music")
  console.log(req.body)
  const { music, err } = createPost(req.body).then((data) => {
    return res.json({
      status: "ok",
      data:music
    })
  }).catch(err => {
    return res.json({
      status: "not ok",
      err
    })
  })
})

const createPost = (music) => {
  if (music.artist === "" || music.song === "") {
    return {music: null, err: "Var noga med att vi får både artist och låt :)"}
  }
  
  if (music.from === "") {
    music.from = "anonym"
  }
  
  const item = {
    TableName: process.env.TABLE,
    Item: {
      id: uuid(),
      date: moment().format('Do MMMM YYYY'),
      artist: music.artist,
      song: music.song,
      from: music.from
    }
  }
  console.log(item)
  
  return db.put(item).promise()
}

module.exports = router;
