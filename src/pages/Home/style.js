import styled from "styled-components";
import image from "../../assets/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";

export const MainContainer = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InfoBox = styled.div`
  z-index: 10;
  margin-bottom: 100px;
  width: 45vw;
  color: ${(props)=> props.theme.colors.primary};
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temp = styled.div`
  font-size: 90px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
`;

export const Location = styled.div`
  font-size: 40px;
  letter-spacing: -1px;
  margin-bottom: 5px;
`;

export const InfoDate = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const Icon = styled.div`
  margin-left: -30px;
`;
