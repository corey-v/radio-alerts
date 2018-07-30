var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
    res.send({
        "express": "Hello from express"
    })
    //res.render('index', { title: 'Express' });
});

module.exports = router;