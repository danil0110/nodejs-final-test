const { Router } = require('express');
const axios = require('axios').default;

const router = Router();

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
  );

  res.status(200).send(data);
});

module.exports = router;
