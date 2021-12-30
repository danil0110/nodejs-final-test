const { Router } = require('express');
const Service = require('../service/service');
const weather = require('../models/weather');
const stats = require('../models/stats');

const router = Router();
const service = new Service();

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  const currentDate = new Date();
  const response = await service.getCity(city);
  if (response.cod === '404') {
    return res.status(404).send({ error: 'city not found' });
  }
  await stats.create({ city, requestDate: currentDate });

  const candidate = await weather.findOne({ name: city });
  if (candidate) {
    if (Math.floor(((currentDate - new Date(candidate.lastUpdated)) / 3600) % 24) < 2) {
      return res.status(200).send(candidate);
    }

    await weather.updateOne({ name: city }, { lastUpdated: currentDate });
    return res.status(200).send({ ...candidate._doc, lastUpdated: currentDate });
  }

  const newCity = await weather.create({ ...response, lastUpdated: currentDate, name: city });
  res.status(200).send(newCity);
});

module.exports = router;
