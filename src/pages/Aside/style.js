import styled from "styled-components";

export const Container = styled.aside`
  width: 30vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SearchBox = styled.div`
  width: 90%;
  height: 90px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  height: 35px;
  width: 70%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SearchButton = styled.div`
  background-color: #82a09a;
  width: 90px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #011c2a;
  cursor: pointer;
`;
