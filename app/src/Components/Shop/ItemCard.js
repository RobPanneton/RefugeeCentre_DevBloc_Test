import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addToCart } from "../../Redux/actions";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ItemPicture>
        <img src={item.image} alt={item.title} />
      </ItemPicture>
      <div>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button
          onClick={() => {
            dispatch(addToCart(item));
          }}
        >
          Add to Cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 270px;
  height: 372px;
  border-radius: 12px;
  margin-top: 48px;

  div {
    min-height: calc(372px - 63%);
    padding-top: 11px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  p {
    padding: 0px 8px;
    font-size: 14px;
  }
  p:nth-of-type(2) {
    font-weight: bold;
  }

  button {
    height: 42px;
    :hover {
      cursor: pointer;
    }
  }
`;

const ItemPicture = styled.div`
  height: 63%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export default ItemCard;
