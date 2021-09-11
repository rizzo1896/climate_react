import styled from "styled-components";

export const MainContainer = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const InfoBox = styled.div`
  z-index: 10;
  margin-bottom: 100px;
  width: 45vw;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoContent = styled.div`
  @keyframes moveup {
    from {
      transform: translateY(+50%);
    }
    to {
      transform: translateY(0%);
    }
  }
  transition: all ease 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: moveup 0.2s;
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
