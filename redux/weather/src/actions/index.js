const API_KEY = '59da1c06dabd180a90bd04166b2c19d1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
// setting a variable here helps limit bugs that may show up by copy and pasting a string value around the app.

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
