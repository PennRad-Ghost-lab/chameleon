const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');

app.use(express.json());
app.use(express.static('dist'));

require('dotenv').config();

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(cors());
app.use(requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});