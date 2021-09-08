import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import defaultTheme from "./theme";
import { WrapContainer } from "./components";
import { Home, Aside } from "./pages";
import { getIp, getWeather } from "./services/api";
import { useDispatch } from "react-redux";

function App() {
  // eslint-disable-next-line
  const [city, setCity] = useState("");
  // eslint-disable-next-line
  const [weatherData, SetWeatherData] = useState([]);
  // const [location, setLocation] = useState({ lat: Number(), lon: Number() });
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        getIp
          .get("/?fields=status,country,city")
          .then((res) => setCity(res.data.city));
      }
    };
    const showPosition = (position) => {
      // lat: position.coords.latitude,
      // lon: position.coords.longitude,
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    };
    getLocation();
  }, []);

  useEffect(() => {
    getWeather
      .get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "ADD_DATA",
          AddData: res.data,
        });
        SetWeatherData(res.data);
      });
      // eslint-disable-next-line
  }, [lat, lon]);

  // useEffect(() => {
  //   getWeather
  //     .get(
  //       `/data/2.5/weather?q=${city}&appid=03838cfa6af6494abe9a10e2f9d3ef17&units=metric`
  //     )
  //     .then((res) => {
  //       dispatch({
  //         type: "ADD_DATA",
  //         AddData: res.data,
  //       });
  //       SetWeatherData(res.data);
  //     });
  //   console.log(weatherData);
  // }, [city]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <WrapContainer>
          <Reset />
          <Home />
          <Aside />
        </WrapContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
