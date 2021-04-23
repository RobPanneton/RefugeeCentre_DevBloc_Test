import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>This is not the page you were looking for! </h1>
      <ReturnLink to="/shop">Return to the shop.</ReturnLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 32px;
  }
`;

const ReturnLink = styled(Link)`
  color: black;
  font-weight: 600;
  font-size: 32px;
  margin-top: 32px;
`;

export default ErrorPage;
