var Sequelize = require('sequelize');
var connectionStr = "postgres://postgres:postgres@localhost:5432/ng5db";
var heroSequelize = new Sequelize(connectionStr);
var Hero = heroSequelize.define('heroes', {
   name: {type: Sequelize.STRING, allowNull: false},
   age: {type: Sequelize.INTEGER, allowNull: false}
});

heroSequelize.sync().then( () => console.log("DB Conn OK, HeroTable OK")).catch( err => console.log("DB Err:", err));

module.exports = Hero;
