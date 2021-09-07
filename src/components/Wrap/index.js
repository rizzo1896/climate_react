import React from "react";
import { WrapContainer } from "./style";

function Wrap(props) {
  return (
    <>
      <WrapContainer>{props.children}</WrapContainer>
    </>
  );
}

export default Wrap;
