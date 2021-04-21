import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Shop/Shop";

import { populateInventory } from "./Redux/actions";

function App() {
  const dispatch = useDispatch();

  const GetInventory = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      console.log(json);
      dispatch(populateInventory(json));
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    GetInventory();
  }, []);

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
