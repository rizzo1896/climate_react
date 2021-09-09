import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  width: 80%;
  height: 35%;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const Wrapp = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
`;

export const Item = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.aside_color};
  font-size: 20px;
  margin-top: 35px;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
  &:first-child {
    cursor: default;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ItemAlt = styled(Item)`
  &:hover {
    cursor: default;
  }
  &:first-child {
    cursor: default;
    color: ${(props) => props.theme.colors.aside_color};
  }
  &:last-child {
    color: ${(props) => props.theme.colors.primary};
    text-align: end;
  }
`;
