import React from "react";
import styled from "styled-components";

import { MARGINS } from "../../Constants";

const NavBar = () => {
  return (
    <Wrapper>
      <h1>NavBar</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${MARGINS.navTop};
  width: 100%;
  border-bottom: 2px solid black;
`;

export default NavBar;
