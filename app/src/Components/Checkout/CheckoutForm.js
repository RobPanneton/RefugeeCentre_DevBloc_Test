import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { emptyCart } from "../../Redux/actions";
import { initialData } from "../../utils";

const CheckoutForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isMessage, setIsMessage] = useState(false);
  const [formData, setFormData] = useState({
    ...initialData,
  });

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (Object.keys(formData).every((key) => formData[key])) {
      // (this would be where the form is sent to the backend)
      setIsMessage(false);
      dispatch(emptyCart());
      setFormData({ ...initialData });
      return history.push(`/confirmation`);
    }
    return setIsMessage(true);
  };

  return (
    <Wrapper>
      <FilloutForm onSubmit={handleSubmitForm}>
        <span>Personal Information</span>
        <div>
          <label>First Name</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          ></input>

          <label>Last Name</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label>Email Address</label>
          <input
            className="address"
            type="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label>Address Line 1</label>
          <input
            className="address"
            onChange={(e) => {
              setFormData({ ...formData, address1: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label>Address Line 2</label>
          <input
            className="address"
            onChange={(e) => {
              setFormData({ ...formData, address2: e.target.value });
            }}
          ></input>
        </div>
        <span>Payment Information</span>
        <div>
          <label>Credit Card Number</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, creditcard: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label>Expiry Date</label>
          <input
            className="expiry"
            onChange={(e) => {
              setFormData({ ...formData, expiry: e.target.value });
            }}
          ></input>

          <label>CCV</label>
          <input
            className="CCV"
            onChange={(e) => {
              setFormData({ ...formData, ccv: e.target.value });
            }}
          ></input>
        </div>
        {isMessage && (
          <FormMessage>
            <p>Please complete the form before submitting.</p>
          </FormMessage>
        )}

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

const FormMessage = styled.div`
  width: 100%;
  height: 72px;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
  }
`;

export default CheckoutForm;
