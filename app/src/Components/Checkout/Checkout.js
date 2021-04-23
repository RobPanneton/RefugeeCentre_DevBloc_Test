import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import BackButton from "./BackButton";
import CheckoutPricing from "./CheckoutPricing";
import CheckoutForm from "./CheckoutForm";
import { calculateTotal } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../Redux/actions";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.shop?.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => calculateTotal(cart));
  }, [cart]);

  return (
    <Wrapper>
      <BackButton />
      <CheckoutContainer>
        <h1>Checkout</h1>
        <CheckoutItemsDiv>
          {Object.keys(cart).length > 0 ? (
            Object.keys(cart).map((item) => {
              return (
                <CheckoutItemCard>
                  <CancelDiv>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item));
                        setTotal(() => calculateTotal(cart));
                      }}
                    >
                      x
                    </button>
                  </CancelDiv>
                  <PictureAndInfo>
                    <img src={cart[item].image} alt={cart[item.title]}></img>
                    <h1>{cart[item].title}</h1>
                    <p>${cart[item].price}</p>

                    <Quantity>
                      <span>Quantity:</span>
                      <span> {cart[item].quantity}</span>
                      <button
                        onClick={() => {
                          dispatch(incrementQuantity(item));
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          if (cart[item].quantity > 1)
                            dispatch(decrementQuantity(item));
                        }}
                      >
                        -
                      </button>
                    </Quantity>
                  </PictureAndInfo>
                </CheckoutItemCard>
              );
            })
          ) : (
            <div>
              Your cart is empty!{" "}
              <ReturnLink to="/shop">Return to the shop.</ReturnLink>
            </div>
          )}
        </CheckoutItemsDiv>
        <CheckoutPricing total={total} />
        <CheckoutForm />
      </CheckoutContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const CheckoutContainer = styled.div`
  width: 100%;
  padding: 0px 140px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 0px 3px;
    text-align: center;
    font-size: 52px;
  }
`;

const CheckoutItemsDiv = styled.div`
  padding-top: 32px;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    padding: 0 3px;
    max-width: 100%;
    max-height: 150px;
    min-height: 150px;
  }
`;

const CheckoutItemCard = styled.div`
  margin: 23px 11px;
  width: 200px;
  height: 300px;
  border-radius: 12px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CancelDiv = styled.div`
  width: 100%;
  height: 24px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    padding-right: 13px;
    font-weight: 800;
    font-size: 16px;
    text-align: center;
    line-height: 18px;

    :active {
      outline: none;
      border: none;
    }

    :focus {
      outline: none;
      border: none;
    }

    ::selection {
      outline: none;
      border: none;
    }

    span {
      text-align: center;
      line-height: 5em;
      vertical-align: center;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

const PictureAndInfo = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 12px;
    font-weight: 400;
    padding-top: 13px;
  }

  p {
    font-weight: 600;
    padding-top: 12px;
  }

  span {
    padding-top: 12px;
  }
`;

const Quantity = styled.div`
  padding-top: 12px;

  span {
    margin-top: 22px;
  }

  span:nth-of-type(2) {
    font-weight: 800;
  }

  button:nth-of-type(1) {
    margin-left: 13px;
  }

  button {
    margin-left: 7px;
    height: 23px;
    width: 23px;
    text-align: center;
    line-height: 1px;
    padding: 0px;
    font-size: 18px;
    font-weight: 600;

    :hover {
      cursor: pointer;
    }
  }
`;

const ReturnLink = styled(Link)`
  font-weight: 600;
  color: black;
`;

export default Checkout;
