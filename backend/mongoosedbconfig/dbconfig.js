var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const DBURL = 'mongodb://localhost:127017/ng5mdb';

mongoose.connect(DBURL).then( () => console.log("MGDB Conn OK")).catch( err => console.log(err));