var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysqlroot',
  database : 'handytec-web'
});

exports.newCustomer = function(customer) {

    console.log("Proceeding to create new customer..");

    connection.connect();

    connection.query('INSERT INTO CUSTOMER SET ?',customer, function(err, result) {
      if (!err){
         // console.log('Success: ', result);
         return 1;
       }else{
         console.log('Error while performing Query:' + err);
         return 0;
       }
        
    });

    connection.end();
}

