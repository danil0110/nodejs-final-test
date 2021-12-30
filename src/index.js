require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/weather', require('./routes/weather.routes'));

app.get('/', (req, res) => {
  res.status(200).send({ ok: true });
});

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, async () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};

start();
