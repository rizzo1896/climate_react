import React from "react";
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

function Home() {
  return (
    <>
      <MainContainer>
        <InfoBox>
          <InfoContent>
            <Temp>08º</Temp>
            <WrapInfo>
              <Location>Rio de Janeiro</Location>
              <InfoDate>06:09 - Sunday, 6 Oct '19</InfoDate>
            </WrapInfo>
            <WrapInfo>
              <Icon>
                <Icons />
              </Icon>
            </WrapInfo>
          </InfoContent>
        </InfoBox>
      </MainContainer>
    </>
  );
}

export default Home;
