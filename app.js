var express = require("express"),  
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


var TRCrudCtrl = require('./controllers/trcruds');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

// Import Models and controllers

var models = require('./models/trcrud')(app, mongoose);
var TRCrudCtrl = require('./controllers/trcruds');

// Route example

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hi!");
});

app.use(router);

// DB Connection

mongoose.connect('mongodb://localhost/trcruds', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  console.log('Connected to Database');
});

// API routes

var trcruds = express.Router();

trcruds.route('/trcruds')
  .get(TRCrudCtrl.findAllTRCrud)
  .post(TRCrudCtrl.addTRCrud);

trcruds.route('/trcruds/:id')
  .get(TRCrudCtrl.findById)
  .put(TRCrudCtrl.updateTRCrud)
  .delete(TRCrudCtrl.deleteTRcrud);

  app.use('/api',trcruds);

// Start server

 app.listen(8090, function() {
    console.log("Node server running on http://localhost:8090");
  });
