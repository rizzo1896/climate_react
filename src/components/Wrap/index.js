import React from "react";
import styled from "styled-components";
import image from "../../assets/imgs/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";

const WrapContainer = styled.div`
  display: flex;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Wrap(props) {
  return (
    <>
      <WrapContainer>{props.children}</WrapContainer>
    </>
  );
}

export default Wrap;
