import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
`;

function Icon(props) {
  const { data } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
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
