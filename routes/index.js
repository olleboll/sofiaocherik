'use strict';

const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4')
const moment = require('moment')
moment.locale('sv')

const db = require('../db')

router.post('/music', async (req, res, next) => {

  console.log("posting music")
  console.log(req.body)
  const { music, err } = await createPost(req.body)
  if (err) {
    return res.json({
      status: "not ok",
      err
    })
  }
  return res.json({
    status: "ok",
    music
  })
})

const createPost = async (music) => {
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
  
  return db.put(item).promise().then( (data) => {
    console.log(data)
    return { music: data, err:null}
  }).catch(err => {
    console.error(err)
    return { music: null, err}
  })
}

module.exports = router;
