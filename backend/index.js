const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const heroRouter = require('./routes/heroRoutes');

app.use(express.static('../dist/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/heroes', heroRouter);

app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});