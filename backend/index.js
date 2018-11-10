const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const doctorRouterPG = require('./pg-routes/doctorRoutes');
const doctorRouterMG = require('./mongo-routes/doctorRoutes');
const userRouterMG = require('./mongo-routes/userRoutes');

const cors_mw = require('./middleware/cors');
const checkAuth_mw = require('./middleware/check-auth');


app.use(express.static('../frontend/dist/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/pg/doctors', cors_mw.allowCors, doctorRouterPG);
app.use('/api/mongo/doctors', cors_mw.allowCors, checkAuth_mw, doctorRouterMG);
app.use('/api/mongo/pub/doctors', cors_mw.allowCors, doctorRouterMG);
app.use('/api/mongo/users', cors_mw.allowCors, userRouterMG);

app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});