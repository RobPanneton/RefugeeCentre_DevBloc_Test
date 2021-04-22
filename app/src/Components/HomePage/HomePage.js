import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <h1>WELCOME</h1>
      <ShopButton to="/shop">
        <h3>Shop Now!</h3>
      </ShopButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;

  h1 {
    font-weight: 800;
    font-size: 72px;
  }
`;

const ShopButton = styled(Link)`
  margin-top: 32px;
  height: 72px;
  width: 250px;
  border: 2px solid black;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: 32px;
  }
`;

export default HomePage;
