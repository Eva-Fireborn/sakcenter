const express = require('express');
const expServer = express();
const httpServer = require('http').createServer(expServer);
const port = 4000;
const {retrieveStartpage} = require('./backend.js');
const bodyParser = require('body-parser')
expServer.use(
	bodyParser.urlencoded({
		extended: true
	})
)

expServer.use(bodyParser.json())

expServer.use('/', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


expServer.get('/APIretrieveAbout', (request, response) => {
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
        if (result) return response.send(result);
    })

    connection.end()
	//response.send(resp);
});


// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
/*app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});*/

// Handles any requests that don't match the ones above
/*app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);*/

// OBS! Starta httpServer i stället för expServer.
httpServer.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
