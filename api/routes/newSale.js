const express = require('express');
const router = express();

router.get('/', function(req, res, next){
    console.log('route hit!')
    res.send('RESPONSE FROM API!', res, req, next);
});

module.exports=router;