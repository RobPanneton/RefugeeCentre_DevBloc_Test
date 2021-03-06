import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { MARGINS } from "../../Constants";
import cartIcon from "../../assets/cart.svg";

const NavBar = () => {
  const userCart = useSelector((state) => state?.shop?.cart);

  return (
    <Wrapper>
      <HomeLogo exact to="/">
        <h1>eSHOP</h1>
      </HomeLogo>
      <CheckoutDiv>
        <CheckoutLink to="/checkout">
          <span>CHECKOUT</span>
        </CheckoutLink>
        <CartLogo to="checkout">
          <img src={cartIcon} alt="cart icon"></img>
          {Object.keys(userCart).length > 0 && (
            <CartCounter>{Object.keys(userCart).length}</CartCounter>
          )}
        </CartLogo>
      </CheckoutDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const CheckoutDiv = styled.div`
  height: 100%;
  width: 200px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 13px;
`;

const CheckoutLink = styled(NavLink)`
  margin-right: 23px;
  text-decoration: none;
  color: black;
  span {
    font-weight: 600;
    font-size: 14;
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
