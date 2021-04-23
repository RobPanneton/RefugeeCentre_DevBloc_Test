import React from "react";

import styled from "styled-components";
import BackButton from "../Checkout/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      <BackButton />
      <Wrapper>
        <h1>Thank you for Ordering!</h1>
        <p>Your receipt and confirmation are being sent to your email.</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  padding: 24px 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 52px;
    font-weight: 600;
  }

  p {
    font-size: 24px;
    padding-top: 32px;
  }
`;

export default ConfirmationPage;
