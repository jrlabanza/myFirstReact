const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'reactdb'
});

 
connection.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    connection.query("SELECT * FROM sample_table", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });


