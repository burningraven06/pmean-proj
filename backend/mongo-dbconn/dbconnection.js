var mongoose = require('mongoose');
const DBURL = 'mongodb://localhost:27017/ng5mgdb';

mongoose.Promise = global.Promise;
var dbConnection = mongoose.connect(DBURL).then( () => console.log("MGDB Conn OK")).catch( err => console.log(err));

module.exports = dbConnection;

