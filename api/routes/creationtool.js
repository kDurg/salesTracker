const express = require('express');
const router = express.Router();
const database = require('../dbQueries/dbqueries');


router.use((req, res, next) => {
    console.log(req.url, "@", Date.now());
    next();
});

router
    .route('/requiredfields')
    .get((req, res) => {

        let companyDataFields = [];
        let locationDataFields = [];
        let userDataFields = [];
        let servicesDataFields = [];
        let requiredDataFields = {};


        // *************** DUMMY DATA ***************
        // RETURN ALL COMPANIES
        companyDataFields = [
            { description: 'Company Name', tableName: 'friendlyname', placeholder: 'Kyles Cats', valueType: 'string', formType: 'textInput' },
            { description: 'Company Admin', tableName: 'companyadmin', placeholder: 'John Doe', valueType: 'string', formType: 'dropdownField' },
            // { description: 'Company ID', tableName: 'companyid', placeholder: '123456', valueType: 'int', formType: 'numberInput' },
            // { description: 'Company DB Name', tableName: 'name', placeholder: 'kylescats', valueType: 'string', formType: 'textInput' },
        ]

        // RETRIEVE ALL COMPANY LOCATIONS AND SETTINGS
        locationDataFields = [
            // THIS WILL BE FOR EACH LOCATION
            { description: 'Location Name', tableName: 'friendlyname', placeholder: 'Bradburn', valueType: 'string', formType: 'textInput' },
            { description: 'Location Owner', tableName: 'ownerid', placeholder: '', valueType: 'int', formType: 'dropdownField' },
            { description: 'Location City', tableName: 'locationcity', placeholder: 'Broomfield', valueType: 'string', formType: 'textInput' },
            { description: 'Location State', tableName: 'locationstate', placeholder: 'CO', valueType: 'string', formType: 'dropdownField' },
            { description: 'Location Zip Code', tableName: 'locationzip', placeholder: '80031', valueType: 'int', formType: 'numberInput' },
        ]

        // RETRIEVE ALL USERS AND THEIR PREFERENCES
        userDataFields = [
            // THIS WILL BE FOR EACH USER

            // locationid, username, password, userid, friendlyname, userlevel, defaultscreen, colormode
            { description: 'Name', tableName: 'friendlyname', placeholder: 'John Doe', valueType: 'string', formType: 'textInput' },
            { description: 'Username', tableName: 'username', placeholder: 'johndoe123', valueType: 'string', formType: 'textInput' },
            { description: 'Password', tableName: 'password', placeholder: 'Password_1', valueType: 'string', formType: 'textInput' },
            { description: 'User Level', tableName: 'userlevel', placeholder: '', valueType: 'string', formType: 'dropdownField' },
            { description: 'Primary Location', tableName: 'locationid', placeholder: '111 - Bradburn', valueType: 'int', formType: 'dropdownField' },
            { description: 'Default Screen', tableName: 'defaultscreen', placeholder: '', valueType: 'string', formType: 'dropdownField' },
        ]

        // RETRIEVE ALL SALES PARAMETERS REQUIRED TO STORE DATA
        servicesDataFields = [
            // ONLY SET UP TO ACCEPT 10 SALES PARAMETERS AS OF 03.24.2020
            { description: 'Primary Location', tableName: 'locationid', placeholder: '111 - Bradburn', valueType: 'int', formType: 'dropdownField' },
            { description: 'Sales Parameter', tableName: 'param1', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param2', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param3', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param4', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param5', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param6', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param7', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param8', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param9', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
            { description: 'Sales Parameter', tableName: 'param10', placeholder: 'Parameter Name', valueType: 'string', formType: 'textInput' },
        ]

        // ******************** RETRIEVE SALES COMMISSION

        requiredDataFields = {
            companyDataFields,
            locationDataFields,
            userDataFields,
            servicesDataFields
        }
        // console.log('[API LOG] req data fields: ', JSON.stringify(requiredDataFields))

        res.send(JSON.stringify(requiredDataFields));
    });

// router
//     .route('/newsale/:company/')
//     .get((req, res) => {
//         res.send('GET FROM /newsale/:company/ ' + req.params.company);
//     })
//     .post((req, res) => {
//         let data = req.body;

//         // ******************** MAKE SURE CID, ACTIVE STATUS = FALSE AND SALESID DOES NOT ALREADY EXIST

//         // ******************** SET UP SQL QUERY TO PASS DATA
//         database('addSale', data);
//         // ******************** SEND SUCCESS MESSAGE BACK
//         res.send('Successfully Saved Sale ' + JSON.stringify(data));

//     })

module.exports = router;