var mongoose = require('mongoose');
var Schema = mongoose.Schema;

DoctorSchema = new Schema({
   name: String, 
   age: Number,
});

var Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;