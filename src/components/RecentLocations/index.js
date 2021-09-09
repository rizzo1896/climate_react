import React, { useEffect, useState } from "react";
import { Container, Wrapp, Item, ItemAlt } from "./style";
import { getWeather } from "../../services/api";
import { useSelector, useDispatch } from "react-redux";

const RecentLocations = () => {
  const [SearchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.WeatherData.data[0]);
  const recentLocations = useSelector(
    (state) => state.WeatherData.recentLocations
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Submit();
  }, [SearchValue]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [data]);

  const Submit = () => {
    getWeather
      .get(
        `/data/2.5/weather?q=${SearchValue}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`
      )
      .then((res) => {
        dispatch({
          type: "ADD_DATA",
          AddData: res.data,
        });
      });
  };
  return (
    <>
      <Container>
        <Item>Recent Locations</Item>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          recentLocations.map((item, index) => {
            return (
              <Item
                key={index}
                onClick={(e) => {
                  setSearchValue(e.currentTarget.childNodes[0].data);
                }}
              >
                {item.name}
              </Item>
            );
          })}
        <Item></Item>
      </Container>
      <Container>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            <Item>Weather Details</Item>
            <Wrapp>
              <ItemAlt>Cloudy</ItemAlt>
              <ItemAlt>{data.clouds.all}%</ItemAlt>
            </Wrapp>
            <Wrapp>
              <ItemAlt>Humidity</ItemAlt>
              <ItemAlt>{data.main.humidity}%</ItemAlt>
            </Wrapp>
            <Wrapp>
              <ItemAlt>Wind</ItemAlt>
              <ItemAlt>{data.wind.speed.toFixed(0)}km/h</ItemAlt>
            </Wrapp>
            <Wrapp>
              <ItemAlt>Rain</ItemAlt>
              <ItemAlt>{data.rain ? data.rain["1h"] * 10 : "0"}mm</ItemAlt>
            </Wrapp>
          </>
        )}
      </Container>
    </>
  );
};

export default RecentLocations;
