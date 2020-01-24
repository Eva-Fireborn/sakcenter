function connectToDB(callback) {
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
      callback(connection);
  })
}

    /*const mysql = require('mysql');
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakcenterLocal'
  })
  connection.connect(function(err) {
      if (err) throw err;
      console.log('connected!');
      //callback(connection);
  })
  connection.query('CREATE TABLE aboutPage (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(255), content TEXT)', function (err, result) {
      if (err) throw err;
      console.log('Table created: ', result);
      connection.end()
  })
  

  const sql = "INSERT INTO aboutPage (type, content) VALUES ('pageContent', '<h1>Sakcenter är ett rekvisitaförråd</h1>')";
  connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Inserted: ', result);
      connection.end()
  })*/

  function retrieveStartpage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM aboutPage WHERE type = 'pageContent'", function (err, result, fields) {
        if (err) {
          connection.end()
          throw err;
        }
        // console.log('fields: ', fields)
        if (result) {
          console.log('result: ', result);
          callback(result);
        connection.end()
        }
      })
    })
  }

  function updateStartpage(newContent, response) {
    console.log('newContent: ', newContent);
    //const content = JSON.stringify(newContent);
    const request = `UPDATE aboutPage SET content = '${newContent}' WHERE type = 'pageContent'`
    connectToDB(connection => {
      connection.query(request, function (err, result, fields) {
        if (err) {
          connection.end()
          throw err;
        }
        // console.log('fields: ', fields)
        if (result) {
          console.log('result: ', result);
          response(result);
        connection.end()
        }
      })
    })
  }

  

/*connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})*/
module.exports = {
  retrieveStartpage,
  updateStartpage
};

