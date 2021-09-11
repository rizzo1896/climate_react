import axios from "axios";

export const getWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const getIconWeather = axios.create({
  baseURL: "https://openweathermap.org/img/wn",
});
