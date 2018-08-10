var express = require('express');
var router = express.Router();
const mongojs = require('mongojs')
const config = require('../config/config')

const db = mongojs(config.database, ['currentlyPlaying'])

//Get currently playing songs
router.get('/currentSongs', function(req, res, next) {
    db.currentlyPlaying.find(function(err, data){
        if(err){
            res.send(err)
        }
        res.json(data)
    })
});


module.exports = router;