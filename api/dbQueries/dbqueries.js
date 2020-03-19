// KEEP ALL QUERIES IN HERE
var mysql = require('mysql');

const database = (type, data) => {
    const dbName = 'mydb'
    const dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: dbName
    });

    switch (type) {

        case 'addSale':

            console.log('Add Sale Query: ', JSON.stringify(data));
            let userData = data.user;
            let saleData = data.data
            let insertStatement = `INSERT INTO ${dbName}.salesdata (companyid, locationid, userid, param1, param2, param3, param4, param5) `; //, param6, param7, param8, param9, param10
            let values = `VALUES (${userData.companyID}, ${userData.locationID}, ${userData.userID}, '${saleData.cid}', '${saleData.date}', '${saleData.name}', '${saleData.membershipLevel}', '${saleData.salesperson}');`
            let query = insertStatement + values;
            
            dbConnection.query(query, (err, res)=> {
                if (err) throw err;
                console.log('Sale Added Successfully: ', query);
            });

        case 'connection':

            // dbConnection.connect();
            // TEST DB CONNECTION
            dbConnection.query('SELECT * FROM mydb.companies', (err, res, fields) => {
                if (err) throw err;
                console.log('DB COMPANIES RESULT: ', res);
            });
    }

}

module.exports = database;