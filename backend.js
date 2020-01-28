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
/*
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
      //callback(connection);
  })
  
  connection.query('CREATE TABLE galleryPage (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(255), content TEXT)', function (err, result) {
      if (err) throw err;
      console.log('Table created: ', result);
      connection.end()
  })
  

  const sql = "INSERT INTO galleryPage (type, content) VALUES ('pageContent', '<h1>Sortiment</h1>')";
  connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Inserted: ', result);
      connection.end()
  })*/

  function retrieveAboutPage(callback) {
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

  function retrieveWorkshopPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM workshopPage WHERE type = 'pageContent'", function (err, result, fields) {
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

    function retrieveInformationPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM informationPage WHERE type = 'pageContent'", function (err, result, fields) {
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

  function retrieveGalleryPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM galleryPage WHERE type = 'pageContent'", function (err, result, fields) {
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

  function updateAboutPage(newContent, response) {
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

  function updateWorkshopPage(newContent, response) {
    console.log('newContent: ', newContent);
    //const content = JSON.stringify(newContent);
    const request = `UPDATE workshopPage SET content = '${newContent}' WHERE type = 'pageContent'`
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

  function updateInformationPage(newContent, response) {
    console.log('newContent: ', newContent);
    //const content = JSON.stringify(newContent);
    const request = `UPDATE informationPage SET content = '${newContent}' WHERE type = 'pageContent'`
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

  function updateGalleryPage(newContent, response) {
    console.log('newContent: ', newContent);
    //const content = JSON.stringify(newContent);
    const request = `UPDATE galleryPage SET content = '${newContent}' WHERE type = 'pageContent'`
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

module.exports = {
  retrieveAboutPage,
  updateAboutPage,
  retrieveWorkshopPage,
  updateWorkshopPage,
  retrieveInformationPage,
  updateInformationPage,
  retrieveGalleryPage,
  updateGalleryPage
};

