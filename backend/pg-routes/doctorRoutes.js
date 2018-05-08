const express = require('express');
const Doctor = require('../pg-models/doctor');
const doctorRouter = express.Router();

doctorRouter.get('/', (req, res, next) => {
   Doctor.findAll().then( (data) => res.status(200).send(data)).catch( err => next(err));
});

doctorRouter.get('/:id', (req, res, next) => {
   Doctor.findOne({ where: {id: parseInt(req.params.id)} }).then( (data) => data? res.status(200).send(data): res.status(404).send({ errMsg: "Invalid ID, Doctor Doesnt Exist"})).catch(err => next(err));
});

doctorRouter.get('/search/', (req, res, next) => {
   Doctor.findAll( { where: { name : { $iLike: `%${req.query.name}%` }}} ).then( (data) => res.status(200).send(data) ).catch( err => next(err));
});

doctorRouter.post('/', (req, res, next) => {
   Doctor.create({ name: req.body.name, age: req.body.age }).then( (data) => res.status(200).send(data)).catch( err => next(err));
});

doctorRouter.patch('/:id', (req, res, next) => {
   Doctor.update({ name: req.body.name, age: req.body.age }, {where: { id: parseInt(req.params.id) } }).then( (data) => data? res.status(200).send(data) : res.status(404).send({ errMsg: "Invalid ID, Doctor Doesnt Exist"})).catch(err => next(err));
});

doctorRouter.delete('/:id', (req, res, next) => {
   Doctor.destroy({ where: {id: parseInt(req.params.id)} }).then( result => result? res.status(200).send({ msg: "Doctor Deleted"}) : res.status(404).send({ errMsg: "Invalid ID, Doctor Doesnt Exist"})).catch( err => next(err));
})

module.exports = doctorRouter;