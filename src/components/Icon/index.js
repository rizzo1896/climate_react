import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import Icons from "../../assets/rainy-icon.json";

const Container = styled.div`
    width: 100px;
`;

function Icon() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Icons,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Container>
        <Lottie options={defaultOptions} />
      </Container>
    </>
  );
}

export default Icon;
