

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

  /* const mysql = require('mysql');
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
  
  connection.query('CREATE TABLE instagram (id INT AUTO_INCREMENT PRIMARY KEY, link VARCHAR(255), description VARCHAR(255))', function (err, result) {
      if (err) throw err;
      console.log('Table created: ', result);
      connection.end()
  })
  

   const sql = "INSERT INTO instagram (link, description) VALUES ('https://www.instagram.com/p/BfatBEXh_dW/', 'Sarkofag')";
  connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Inserted: ', result);
      connection.end()
  })*/

  function retrievePassword(userPassword, callback) {
    console.log('userPassword: ', userPassword);
    const hash = require('object-hash');
    const salt = 'vd%.>W6Y6KGAF>sb6RdfN';
    const newPassword = hash(salt+userPassword);
    console.log('newPassword: ', newPassword);
    connectToDB(connection => {
      // const sql = `INSERT INTO admin (type, content) VALUES ('password', '${newPassword}')`
      connection.query("SELECT * FROM admin WHERE type = 'password'", function (err, result, fields) {
        if (err) {
          connection.end()
          throw err;
        }
        let loggedIn = false;
        if (result) {
          result.forEach(res => {
            if (newPassword === res.content) {
              console.log('Rätt lösenord');
              loggedIn = true;
            }
          });
        callback(loggedIn);
        connection.end()
        }
      })
    })
  }

  function retrieveInstagramPosts(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM instagram", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }

        if (result) {
          console.log('result: ', result);
          callback(result);
        connection.end()
        }
      })
    })
  }

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
  
  function updateInstagramPosts(newContent, response) {
    console.log('newContent: ', newContent);

    const request =  `INSERT INTO instagram (link, description) VALUES ('${newContent.link}', '${newContent.description}')`;

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
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
  updateGalleryPage,
  retrievePassword,
  retrieveInstagramPosts,
  updateInstagramPosts
};

