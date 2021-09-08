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
import IconSvg from "../../assets/icons/rainy-icon.json";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.WeatherData.data[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [data]);

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

    return `${hours}:${minutes} - ${day}, ${date} ${month} ${year}`;
  };

  return (
    <>
      <MainContainer>
        <InfoBox>
          {isLoading && <span style={{ color: "white" }}>Loading...</span>}
          {!isLoading && (
            <InfoContent>
              <Temp>{data.main.temp.toFixed(0)}º</Temp>
              <WrapInfo>
                <Location>{data.name}</Location>
                <InfoDate>{dateBuilder(data.timezone)}</InfoDate>
              </WrapInfo>
              <WrapInfo>
                <Icon>
                  <Icons data={IconSvg} />
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
