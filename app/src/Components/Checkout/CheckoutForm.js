import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { emptyCart } from "../../Redux/actions";

const CheckoutForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(emptyCart());
    history.push(`/confirmation`);
  };

  return (
    <Wrapper>
      <FilloutForm onSubmit={handleSubmit}>
        <span>Personal Information</span>
        <div>
          <label>First Name</label>
          <input></input>

          <label>Last Name</label>
          <input></input>
        </div>
        <div>
          <label>Email Address</label>
          <input className="address"></input>
        </div>
        <div>
          <label>Home Address Line 1</label>
          <input className="address"></input>
        </div>
        <div>
          <label>Home Address Line 2</label>
          <input className="address"></input>
        </div>
        <span>Payment Information</span>
        <div>
          <label>Credit Card Number</label>
          <input></input>
        </div>
        <div>
          <label>Expiry Date</label>
          <input className="expiry"></input>

          <label>CCV</label>
          <input className="CCV"></input>
        </div>
        <button type="submit">Confirm !</button>
      </FilloutForm>{" "}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 23px;
`;

const FilloutForm = styled.form`
  padding: 17px 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  div {
    margin-top: 11px;
  }

  span {
    font-weight: 600;
    text-decoration: underline;
    padding-top: 17px;
  }

  label {
    padding-right: 7px;
  }

  input {
    width: 220px;
    margin-right: 7px;
    padding-left: 3px;
  }

  button {
    margin-top: 17px;
    width: 100%;
    height: 32px;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    line-height: 1px;
  }

  .address {
    width: 300px;
  }

  .expiry {
    width: 120px;
  }

  .CCV {
    width: 52px;
  }
`;

export default CheckoutForm;
