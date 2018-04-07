const Sequelize = require('sequelize');
const pgconnectionStr = require('../pgdbconn/dbconnection');

const heroSequelize = new Sequelize(pgconnectionStr);

const Hero = heroSequelize.define('heroes', {
   name: {
      type: Sequelize.STRING, allowNull: false
   },
   age: {
      type: Sequelize.INTEGER, allowNull: false
   }
});

heroSequelize.sync().then( () => console.log("PGDB Conn OK, HeroTable OK")).catch( err => console.log("PGDB Err:", err));

module.exports = Hero;
