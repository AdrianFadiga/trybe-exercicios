const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const cepController = require('./controllers/cepController');
const res = require('express/lib/response');
const rescue = require('express-rescue');

app.use(bodyParser.json());

app.post('/cep', cepController.createNewAddress);

app.get('/cep/:cep', cepController.getAddressByCep);

app.use((err, req, res, next) => {
  if (err.status) return res.status(err.status).json({message: err.message});
  return res.status(500).json({message: err.message});
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});