const express = require('express');
const expServer = express();
const httpServer = require('http').createServer(expServer);
const port = 4000;
const { 
	retrieveAboutPage,
	updateAboutPage,
	retrieveWorkshopPage,
	updateWorkshopPage,
	retrieveInformationPage,
	updateInformationPage,
	retrieveGalleryPage,
	updateGalleryPage
 } = require('./backend.js');
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
	retrieveAboutPage(result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.get('/APIretrieveWorkshop', (request, response) => {
	retrieveWorkshopPage(result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.get('/APIretrieveInformation', (request, response) => {
	retrieveInformationPage(result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.get('/APIretrieveGallery', (request, response) => {
	retrieveGalleryPage(result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.post('/APIpostAbout', (request, response) => {
    console.log('req body: ', request.body);
	updateAboutPage(request.body.newContent, result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.post('/APIpostWorkshop', (request, response) => {
    console.log('req body: ', request.body);
	updateWorkshopPage(request.body.newContent, result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.post('/APIpostInformation', (request, response) => {
    console.log('req body: ', request.body);
	updateInformationPage(request.body.newContent, result => {
		response.send({
			status: 200,
			body: result
		})
	})
});

expServer.post('/APIpostGallery', (request, response) => {
    console.log('req body: ', request.body);
	updateGalleryPage(request.body.newContent, result => {
		response.send({
			status: 200,
			body: result
		})
	})
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
