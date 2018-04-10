var mongoose = require('mongoose');
var Schema = mongoose.Schema;

HeroSchema = new Schema({
   name: String, 
   age: Number,
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;