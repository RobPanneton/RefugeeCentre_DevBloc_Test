import React, { useState, useEffect } from "react";

import styled from "styled-components";

const CheckoutPricing = ({ total }) => {
  const [gst, setGst] = useState(0);
  const [qst, setQst] = useState(0);
  const [fullTotal, setFullTotal] = useState(0);

  useEffect(() => {
    setGst((total * 0.05).toFixed(2));
    setQst((total * 0.09975).toFixed(2));
    setFullTotal((Number(total) + Number(gst) + Number(qst) + 4.95).toFixed(2));
  }, [total]);

  return (
    <Wrapper>
      <PricingContainer>
        <div>
          <span>Item Total:</span>
          <span>${total}</span>
        </div>
        <div>
          <span>GST:</span>
          <span>${gst}</span>
        </div>
        <div>
          <span>QST:</span>
          <span>${qst}</span>
        </div>
        <div>
          <span>Shipping:</span>
          <span>$4.95</span>
        </div>
        <div>
          <span>Total:</span>
          <span>${fullTotal}</span>
        </div>
      </PricingContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 52px;
  padding: 32px 52px;
  width: 50%;
  border: 1px solid black;
`;

const PricingContainer = styled.div`
  div {
    width: 100%;
    max-height: 32px;
    display: flex;
    justify-content: space-between;
  }

  div:nth-of-type(5) {
    padding-top: 13px;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default CheckoutPricing;
