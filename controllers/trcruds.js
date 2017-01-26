//File: controllers/trcruds.js
var mongoose = require('mongoose');  
var TRCrud  = mongoose.model('TRCrud');

//GET - Return all trcruds in the DB
exports.findAllTRCruds = function(req, res) {  
    TRCrud.find(function(err, trcruds) {
    if(err) res.send(500, err.message);

    console.log('GET /trcruds')
        res.status(200).jsonp(trcuds);
    });
};

//GET - Return a TRCrud with specified ID
exports.findById = function(req, res) {  
    TRCrud.findById(req.params.id, function(err, trcrud) {
    if(err) return res.send(500, err.message);

    console.log('GET /trcrud/' + req.params.id);
        res.status(200).jsonp(trcrud);
    });
};
//POST - Insert a new TRCrud in the DB
exports.addTRCrud = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var trcrud = new TRCrud({
        name:    req.body.name,
        mail:     req.body.mail,
        password:  req.body.password,
        phone:   req.body.phone,
        store:  req.body.store,
        selected:  req.body.selected
    });

    trcrud.save(function(err, trcrud) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(trcrud);
    });
};

//PUT - Update a register already exists
exports.updateTRCrud = function(req, res) {  
    TRCrud.findById(req.params.id, function(err, trcrud) {
        trcrud.name   = req.body.name;
        trcrud.mail    = req.body.mail;
        trcrud.password = req.body.password;
        trcrud.phone  = req.body.phone;
        trcrud.store = req.body.store;
        trcrud.selected   = req.body.selected;
        
        trcrud.save(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200).jsonp(trcrud);
        });
    });
};

//DELETE - Delete a TRCrud with specified ID
exports.deleteTRcrud = function(req, res) {  
    TRCrud.findById(req.params.id, function(err, trcrud) {
        trcrud.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};