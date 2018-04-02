var express = require('express');
const Hero = require('../models/hero');
var heroRouter = express.Router();

heroRouter.get('/', (req, res, next) => {
   Hero.findAll().then( (data) => res.status(200).send(data)).catch( err => next(err));
})

heroRouter.post('/', (req, res, next) => {
   Hero.create({ name: req.body.name, age: req.body.age }).then( (data) => res.status(200).send(data)).catch( err => next(err));
});

heroRouter.get('/:id', (req, res, next) => {
   Hero.findOne({ where: {id: parseInt(req.params.id)} }).then( (data) => data? res.status(200).send(data): res.status(404).send({ errMsg: "Invalid ID, Hero Doesnt Exist"})).catch(err => next(err));
});

heroRouter.patch('/:id', (req, res, next) => {
   Hero.update({ name: req.body.name, age: req.body.age }, {where: { id: parseInt(req.params.id) } }).then( (data) => data? res.status(200).send(data) : res.status(404).send({ errMsg: "Invalid ID, Hero Doesnt Exist"})).catch(err => next(err));
});

heroRouter.delete('/:id', (req, res, next) => {
   Hero.destroy({ where: {id: parseInt(req.params.id)} }).then( result => result? res.status(200).send({ msg: "Hero Deleted"}) : res.status(404).send({ errMsg: "Invalid ID, Hero Doesnt Exist"})).catch( err => next(err));
})

module.exports = heroRouter;