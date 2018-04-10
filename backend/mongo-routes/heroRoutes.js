const express = require('express');
const Hero = require('../mongo-models/hero');
const heroRouter = express.Router();

heroRouter.get('/', (req, res, next) => {
   Hero.find( (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data);
   })
});

heroRouter.get('/:id', (req, res, next) => {
   Hero.findById(req.params.id, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
   });
});

heroRouter.get('/search', (req, res, next) => {
   Hero.find( {'name': `${req.query.name}`}, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
   })
});

heroRouter.post('/', (req, res, next) => {
   Hero.create({
      name: req.body.name,
      age: req.body.age
   }, (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data)
   })
});

heroRouter.patch('/:id', (req, res, next) => {
   var objID = req.params.id;
   var newHero = {
      name: req.body.name, age: req.body.age
   }
   Hero.findByIdAndUpdate(objID, newHero, (err, data) => {
      if (err) return res.status(500).send(err)
      return res.status(200).send(data)
   })
});

heroRouter.delete('/:id', (req, res, next) =>{
   var objID = req.params.id;
   Hero.findByIdAndRemove(objID, (err, data) =>{
      if (err) return res.status(500).send(err);
      return res.status(200).send({msg: `${data} Deleted `})
   })
})
module.exports = heroRouter;