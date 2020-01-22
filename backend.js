/*function connectToDB() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakcenterLocal'
  })
  connection.connect(function(err) {
      if (err) throw err;
      console.log('connected!');
      return connection;
  })
}*/


  /*connection.query('CREATE TABLE startPage (type VARCHAR(255), content VARCHAR(255))', function (err, result) {
      if (err) throw err;
      console.log('Table created: ', result);
  })*/

  /*const sql = "INSERT INTO startPage (type, content) VALUES ('bread1', 'Sakcenter är ett rekvisitaförråd')";
  connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Inserted: ', result);
  }) */

  function retrieveStartpage() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakcenterLocal'
  })
  connection.connect(function(err) {
      if (err) throw err;
      console.log('connected!');
  })
    connection.query("SELECT * FROM startPage", function (err, result, fields) {
        if (err) throw err;
        console.log('result: ', result);
        // console.log('fields: ', fields)
        if (result) return result;
    })

    connection.end()
  }

  

/*connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})*/
module.exports = {retrieveStartpage};

