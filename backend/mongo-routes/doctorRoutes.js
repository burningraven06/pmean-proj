const express = require('express');
const Doctor = require('../mongo-models/doctor');
const doctorRouter = express.Router();

doctorRouter.get('/', (req, res, next) => {
   Doctor.find( (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data);
   })
});

doctorRouter.get('/:id', (req, res, next) => {
   Doctor.findById(req.params.id, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
   });
});

doctorRouter.get('/search', (req, res, next) => {
   Doctor.find( {'name': `${req.query.name}`}, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
   })
});

doctorRouter.post('/', (req, res, next) => {
   Doctor.create({
      name: req.body.name,
      age: req.body.age
   }, (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data)
   })
});

doctorRouter.patch('/:id', (req, res, next) => {
   var objID = req.params.id;
   var newDoctor = {
      name: req.body.name, age: req.body.age
   }
   Doctor.findByIdAndUpdate(objID, newDoctor, (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data)
   })
});

doctorRouter.delete('/:id', (req, res, next) =>{
   var objID = req.params.id;
   Doctor.findByIdAndRemove(objID, (err, data) =>{
      if (err) return res.status(500).send(err);
      return res.status(200).send({msg: `${data} Deleted `})
   })
})
module.exports = doctorRouter;