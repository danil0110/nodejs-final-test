const { Schema, model } = require('mongoose');

const weather = new Schema({
  lastUpdated: Schema.Types.Date,
  coord: {
    lon: {
      type: 'number',
    },
    lat: {
      type: 'number',
    },
  },
  weather: [],
  base: {
    type: 'string',
  },
  main: {
    temp: {
      type: 'number',
    },
    feels_like: {
      type: 'number',
    },
    temp_min: {
      type: 'number',
    },
    temp_max: {
      type: 'number',
    },
    pressure: {
      type: 'number',
    },
    humidity: {
      type: 'number',
    },
  },
  visibility: {
    type: 'number',
  },
  wind: {
    speed: {
      type: 'number',
    },
    deg: {
      type: 'number',
    },
    gust: {
      type: 'number',
    },
  },
  clouds: {
    all: {
      type: 'number',
    },
  },
  dt: {
    type: 'number',
  },
  sys: {
    type: {
      type: 'number',
    },
    id: {
      type: 'number',
    },
    country: {
      type: 'string',
    },
    sunrise: {
      type: 'number',
    },
    sunset: {
      type: 'number',
    },
  },
  timezone: {
    type: 'number',
  },
  id: {
    type: 'number',
  },
  name: { type: 'string' },
});

module.exports = model('Weather', weather);
