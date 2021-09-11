import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getIconWeather } from "../../services/api";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100px;
`;

function Icon() {
  const data = useSelector((state) => state.WeatherData.data[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgWeather, setImgWeather] = useState("");

  useEffect(() => {
    getIconWeather
      .get(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`, {
        responseType: "blob",
      })
      .then((res) => {
        setIsLoading(false);
        let new_blob = new Blob([res.data], { type: "image/png" });
        let url = URL.createObjectURL(new_blob);
        setImgWeather(url);
      });
  }, [data]);

  return (
    <>
      <Container>
        {isLoading && (
          <>
            <div>Loading...</div>
          </>
        )}
        {!isLoading && (
          <>
            <img src={imgWeather} />
          </>
        )}
      </Container>
    </>
  );
}

export default Icon;
