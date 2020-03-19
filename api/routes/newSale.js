const express = require('express');
const router = express.Router();
const database = require('../dbQueries/dbqueries');


router.use((req, res, next) => {
    console.log(req.url, "@", Date.now());
    next();
});

router
    .route('/newsale')
    .get((req, res) => {
        res.send('API newsale path hit', res, req);
    });

router
    .route('/newsale/:company/')
    .get((req, res) => {
        res.send('GET FROM /newsale/:company/ ' + req.params.company);
    })
    .post((req, res) => {
        let data = req.body;

        // ******************** MAKE SURE CID, ACTIVE STATUS = FALSE AND SALESID DOES NOT ALREADY EXIST

        // ******************** SET UP SQL QUERY TO PASS DATA
        database('addSale', data);
        // ******************** SEND SUCCESS MESSAGE BACK
        res.send('Successfully Saved Sale ' + JSON.stringify(data));

    })

module.exports = router;