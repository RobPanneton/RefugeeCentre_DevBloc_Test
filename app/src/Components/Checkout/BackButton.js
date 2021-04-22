import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  return (
    <BackContainer>
      <BackToShop to="/shop">
        {"<"}
        <span>Back to Shop</span>
      </BackToShop>
    </BackContainer>
  );
};

const BackContainer = styled.div`
  min-width: 100%;
  height: 42px;
`;

const BackToShop = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 11px;
  text-decoration: none;
  width: 280px;
  font-size: 32px;
  font-weight: 800;
  color: black;
  height: 100%;

  span {
    margin-left: 24px;
    text-decoration: underline;
    font-weight: 600;
    font-size: 23px;
  }
`;

export default BackButton;
