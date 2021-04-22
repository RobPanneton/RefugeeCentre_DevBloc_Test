import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { MARGINS } from "../../Constants";
import cart from "../../assets/cart.svg";

const NavBar = () => {
  return (
    <Wrapper>
      <HomeLogo exact to="/"><h1>eSHOP</h1></HomeLogo>
      <CartLogo><img src={cart} alt="cart icon"></img></CartLogo>
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
height: 100%
width: 150px;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding-left: 13px;

h1{
  font-size:32px;
  font-weight: 800;
  color: black;
}
`

const CartLogo = styled.div`
height: 100%;
width: 52px;
padding-right: 13px;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
`;


export default NavBar;
