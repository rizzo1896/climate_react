import axios from "axios";

export const getIp = axios.create({
  baseURL: "http://ip-api.com/json",
});

export const getWeather = axios.create({
    baseURL: `https://api.openweathermap.org`,
});
