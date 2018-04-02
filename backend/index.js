const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const heroRouter = require('./routes/heroRoutes');

app.use(express.static('../frontend/dist/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

app.use('/api/heroes', allowCors, heroRouter);

app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});