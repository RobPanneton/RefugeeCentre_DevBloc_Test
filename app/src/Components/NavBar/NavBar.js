import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { MARGINS } from "../../Constants";
import cartIcon from "../../assets/cart.svg";

const NavBar = () => {
  const userCart = useSelector((state) => state?.shop?.cart);

  let amountOfItems = 0;

  if (Object.keys(userCart).length > 0) {
    Object.keys(userCart).forEach((item) => {
      amountOfItems += userCart[item].quantity;
    });
  }

  if (Object.keys(userCart).length === 0 || !Object.keys(userCart).length) {
    amountOfItems = 0;
  }

  return (
    <Wrapper>
      <HomeLogo exact to="/">
        <h1>eSHOP</h1>
      </HomeLogo>
      <CartLogo to="checkout">
        <img src={cartIcon} alt="cart icon"></img>
        {Object.keys(userCart).length > 0 ? (
          <CartCounter>{amountOfItems}</CartCounter>
        ) : null}
      </CartLogo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: fixed; */
  height: ${MARGINS.navTop};
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
`;

const HomeLogo = styled(NavLink)`
  height: 100%;
  width: 150px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 13px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: black;
  }
`;

const CartLogo = styled(NavLink)`
  position: relative;
  height: 100%;
  width: 52px;
  padding-right: 13px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartCounter = styled.div`
  border-radius: 50%;
  position: absolute;
  bottom: 28px;
  right: 10px;
  width: 14px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: 0.5px solid black;
  font-weight: 600;
  font-size: 10px;
`;

export default NavBar;
