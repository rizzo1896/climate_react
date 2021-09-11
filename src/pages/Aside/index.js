import React, { useState } from "react";
import { Container, SearchBox, SearchInput, SearchButton } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import { getWeather } from "../../services/api";
import { useDispatch } from "react-redux";
import { RecentLocations } from "../../components";

const Aside = () => {
  const [SearchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const Submit = () => {
    getWeather
      .get(
        `/data/2.5/weather?q=${SearchValue}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`
      )
      .then((res) => {
        dispatch({
          type: "ADD_DATA",
          AddData: res.data,
          newTimeZone: res.data.timezone,
        });
      });
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      Submit(SearchValue);
    }
  }

  return (
    <Container>
      <SearchBox>
        <SearchInput
          placeholder="Another location"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={Submit}>
          <SearchIcon fontSize="large" />
        </SearchButton>
      </SearchBox>
      <RecentLocations></RecentLocations>
    </Container>
  );
};

export default Aside;
