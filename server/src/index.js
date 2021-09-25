const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const logs = require('./api/logs');

mongoose.connect('mongodb://localhost/pancakes', {
  useNewUrlParser: true,
});

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

/* ROUTES */
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
