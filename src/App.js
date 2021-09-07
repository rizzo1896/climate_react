import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import defaultTheme from "./theme";
import { WrapContainer } from "./components";
import { Home, Aside } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <WrapContainer>
          <Reset />
          <Home />
          <Aside />
        </WrapContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
