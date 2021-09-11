import React, { useEffect, useState } from "react";
import {
  MainContainer,
  InfoBox,
  InfoContent,
  Temp,
  WrapInfo,
  Location,
  InfoDate,
  Icon,
} from "./style";
import { Icons } from "../../components";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.WeatherData.data[0]);
  const time = useSelector((state) => state.WeatherData.timeZone[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    console.log(data);
    console.log(time);
    if (time === undefined && data === undefined) {
      setIsLoading(true);
    } else {
      setNewTime(dateBuilder(time));
      setIsLoading(false);
    }
  }, [data, time]);

  const dateBuilder = (timezone) => {
    const nowInLocalTime = Date.now() + 1000 * (timezone / 3600);
    const millitime = new Date(nowInLocalTime);
    // const dateFormat = millitime.toLocaleString();

    let day = millitime.toLocaleString("pt-BR", { weekday: "long" });
    let month = millitime.toLocaleString("pt-BR", { month: "short" });
    let date = millitime.toLocaleString("pt-BR", { day: "numeric" });
    let year = millitime.toLocaleString("pt-BR", { year: "2-digit" });
    let hours = millitime.toLocaleString("pt-BR", { hour: "numeric" });
    let minutes = millitime.toLocaleString("pt-BR", { minute: "2-digit" });

    return `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } - ${day}, ${date} ${month} ${year}`;
  };

  return (
    <>
      <MainContainer>
        <InfoBox>
          {isLoading && <span style={{ color: "white" }}>Loading...</span>}
          {!isLoading && data !== undefined && (
            <InfoContent>
              <Temp>{data.main.temp.toFixed(0)}º</Temp>
              <WrapInfo>
                <Location>{data.name}</Location>
                <InfoDate>{newTime}</InfoDate>
              </WrapInfo>
              <WrapInfo>
                <Icon>
                  <Icons />
                </Icon>
              </WrapInfo>
            </InfoContent>
          )}
        </InfoBox>
      </MainContainer>
    </>
  );
}

export default Home;
