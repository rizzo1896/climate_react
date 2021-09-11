import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import defaultTheme from "./theme";
import { WrapContainer } from "./components";
import { Home, Aside } from "./pages";
import { getWeather } from "./services/api";
import { useDispatch } from "react-redux";

function App() {
  // eslint-disable-next-line
  // const [weatherData, SetWeatherData] = useState([]);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(showPosition);
    };

    const showPosition = (position) => {
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
        dispatch({
          type: "ADD_DATA",
          AddData: res.data,
          newTimeZone: res.data.timezone,
        });
        // SetWeatherData(res.data);
      });
    // eslint-disable-next-line
  }, [lat, lon]);

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
