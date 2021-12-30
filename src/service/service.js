const fetch = require('node-fetch');

class Service {
  _baseApi = 'https://api.openweathermap.org/data/2.5/weather';
  _apiKey = process.env.WEATHER_API_KEY;

  getCity = async (city) => {
    try {
      const res = await fetch(`${this._baseApi}?q=${city}&appid=${this._apiKey}`);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };
}

module.exports = Service;
