const Sequelize = require('sequelize');
const pgconnectionStr = require('../pg-dbconn/dbConnStr');

const doctorSequelize = new Sequelize(pgconnectionStr);

const Doctor = doctorSequelize.define('doctors', {
   name: {
      type: Sequelize.STRING, allowNull: false
   },
   age: {
      type: Sequelize.INTEGER, allowNull: false
   }
});

doctorSequelize.sync().then( () => console.log("PGDB Conn OK, DoctorTable OK")).catch( err => console.log("PGDB Err:", err));

module.exports = Doctor;
