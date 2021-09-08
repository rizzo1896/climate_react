import React, { useState } from "react";
import { Container, SearchBox, SearchInput, SearchButton } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import { getWeather } from "../../services/api";
import { useDispatch } from "react-redux";

const Aside = () => {
  const [SearchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const Submit = (e) => {
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
        <SearchButton>
          <SearchIcon fontSize="large" onClick={Submit} />
        </SearchButton>
      </SearchBox>
    </Container>
  );
};

export default Aside;
