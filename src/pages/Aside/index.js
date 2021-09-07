import React from "react";
import { Container, SearchBox, SearchInput, SearchButton } from "./style";
import SearchIcon from "@material-ui/icons/Search";

const Aside = () => {
  return (
    <Container>
      <SearchBox>
        <SearchInput placeholder="Another location" />
        <SearchButton>
          <SearchIcon fontSize="large"/>
        </SearchButton>
      </SearchBox>
    </Container>
  );
};

export default Aside;
