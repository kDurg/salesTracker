const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('request made::: ', req.url, "@", Date.now());
    next();
});

router
    .route('/')
    .get((req, res) => {
        res.send('HIT THE / path for login')
    });

router
    .route('/:company/:userid')
    .get((req, res) => {
        res.send('GET FROM /:company/:userid ' + req.params.company);
    })
    .post((req, res)=> {
        res.send('POST RECIEVED: ', req);
    })

module.exports = router;