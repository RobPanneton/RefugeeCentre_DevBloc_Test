import React from "react";

import styled from "styled-components";

const CheckoutItems = ({ cart }) => {
  return (
    <CheckoutItemsDiv>
      {Object.keys(cart).length > 0 &&
        Object.keys(cart).map((item) => {
          return (
            <CheckoutItemCard key={item}>
              <CancelDiv>
                <button>x</button>
              </CancelDiv>
              <PictureAndInfo>
                <img src={cart[item].image} alt={cart[item.title]}></img>
                <h1>{cart[item].title}</h1>
                <p>${cart[item].price}</p>

                <Quantity>
                  <span>Quantity:</span>
                  <span> {cart[item].quantity}</span>
                  <button>+</button>
                  <button>-</button>
                </Quantity>
              </PictureAndInfo>
            </CheckoutItemCard>
          );
        })}
    </CheckoutItemsDiv>
  );
};

const CheckoutItemsDiv = styled.div``;

const CheckoutItemCard = styled.div``;

const CancelDiv = styled.div`
  button {
  }
`;

const PictureAndInfo = styled.div``;

const Quantity = styled.div``;

export default CheckoutItems;
