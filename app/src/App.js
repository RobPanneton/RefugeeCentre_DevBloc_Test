import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import styled from "styled-components";

import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default App;
