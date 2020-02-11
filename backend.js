

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
      //callback(connection);
  })
  
  connection.query('CREATE TABLE contactPage (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(255), content TEXT)', function (err, result) {
      if (err) throw err;
      console.log('Table created: ', result);
      connection.end()
  })
  

   const sql = "INSERT INTO contactPage (type, content) VALUES ('pageContent', '<h1>Kontakt</h1>')";
  connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Inserted: ', result);
      connection.end()
  })*/

  function retrievePassword(userPassword, callback) {

    const hash = require('object-hash');
    const salt = 'vd%.>W6Y6KGAF>sb6RdfN';
    const newPassword = hash(salt+userPassword);

    connectToDB(connection => {
      //Insert new password
      // const sql = `INSERT INTO admin (type, content) VALUES ('password', '${newPassword}')`
      connection.query("SELECT * FROM admin WHERE type = 'password'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        let loggedIn = false;
        if (result) {
          result.forEach(res => {
            if (newPassword === res.content) {
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
          callback(result);
        connection.end()
        }
      })
    })
  }

  function retrieveImportantNews(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM importantNews", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }

        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

  function retrieveContactPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM contactPage WHERE type = 'pageContent'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

  function retrieveAboutPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM aboutPage WHERE type = 'pageContent'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

  function retrieveWorkshopPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM workshopPage WHERE type = 'pageContent'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

    function retrieveInformationPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM informationPage WHERE type = 'pageContent'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

  function retrieveGalleryPage(callback) {
    connectToDB(connection => {
      connection.query("SELECT * FROM galleryPage WHERE type = 'pageContent'", function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          callback(result);
        connection.end()
        }
      })
    })
  }

  function updateAboutPage(newContent, response) {

    const request = `UPDATE aboutPage SET content = '${newContent}' WHERE type = 'pageContent'`

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function updateWorkshopPage(newContent, response) {

    const request = `UPDATE workshopPage SET content = '${newContent}' WHERE type = 'pageContent'`

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function updateContactPage(newContent, response) {

    const request = `UPDATE contactPage SET content = '${newContent}' WHERE type = 'pageContent'`

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function updateInformationPage(newContent, response) {

    const request = `UPDATE informationPage SET content = '${newContent}' WHERE type = 'pageContent'`

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function updateGalleryPage(newContent, response) {

    const request = `UPDATE galleryPage SET content = '${newContent}' WHERE type = 'pageContent'`

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }
  
  function updateInstagramPosts(newContent, response) {

    const request =  `INSERT INTO instagram (link, description) VALUES ('${newContent.link}', '${newContent.description}')`;

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function updateImportantMessage(newContent, response) {

    const request =  `INSERT INTO importantNews (endDate, message) VALUES ('${newContent.endDate}', '${newContent.message}')`;

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function deleteImportantNews(id, response) {

    const request =  `DELETE FROM importantNews WHERE id = '${id}'`;

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
          response(result);
        connection.end()
        }
      })
    })
  }

  function deleteInstagramPost(id, response) {
    const request =  `DELETE FROM instagram WHERE id = '${id}'`;

    connectToDB(connection => {
      connection.query(request, function (err, result) {
        if (err) {
          connection.end()
          throw err;
        }
        if (result) {
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
  updateInstagramPosts,
  retrieveImportantNews,
  deleteImportantNews,
  updateImportantMessage,
  deleteInstagramPost,
  retrieveContactPage,
  updateContactPage
};

