import axios from "axios";

export const getWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const getIconWeather = axios.create({
  baseURL: "http://openweathermap.org/img/wn",
});
