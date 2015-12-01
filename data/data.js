/*#########################################################################################
#
# Author:       Diego Montufar
# Date:         Nov/2015
# File:         data.js
# Context:      Server side code
# Description:  Database Layer
#
#
#########################################################################################*/

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysqlroot',
  database : 'handytec-web'
});

exports.newCustomer = function(customer) {

    console.log("Proceeding to create new customer..");

    connection.query('INSERT INTO CUSTOMER SET ?',customer, function(err, result) {
      if (!err){
         return 1;
       }else{
         console.log('Error while performing Query:' + err);
         return 0;
       }
        
    });
}

