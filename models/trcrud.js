var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var trcrudSchema = new Schema({  
  name:    { type: String },
  mail:     { type: String },
  password:  { type: String },
  phone:   { type: String },
  store:  { type: Number },
  selected: { type: boolean }
});
module.exports = mongoose.model('TRCrud', trcrudSchema); 
