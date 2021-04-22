import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeCategory } from "../../Redux/actions";

import styled from "styled-components";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categoryFilter = useSelector((state) => state?.shop?.categorySelected);

  return (
    <Wrapper>
      <CategoryContainer>
        <Category
          tabIndex="0"
          className={categoryFilter === "All" ? "selected" : null}
          onClick={() => dispatch(changeCategory("All"))}
        >
          All
        </Category>
        <Category
          className={categoryFilter === "electronics" ? "selected" : null}
          onClick={() => dispatch(changeCategory("electronics"))}
        >
          Electronics
        </Category>
        <Category
          className={categoryFilter === "jewelery" ? "selected" : null}
          onClick={() => dispatch(changeCategory("jewelery"))}
        >
          Jewelery
        </Category>
        <Category
          className={categoryFilter === "men's clothing" ? "selected" : null}
          onClick={() => dispatch(changeCategory("men's clothing"))}
        >
          Men's Clothing
        </Category>
        <Category
          className={categoryFilter === "women's clothing" ? "selected" : null}
          onClick={() => dispatch(changeCategory("women's clothing"))}
        >
          Women's Clothing
        </Category>
      </CategoryContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  width: 272px;
  border-right: 3px black solid;
`;

const CategoryContainer = styled.div`
  padding: 48px 12px;
  height: 420px;
`;

const Category = styled.button`
  margin-top: 12px;
  border: 2px solid black;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  height: 52px;

  :hover {
    cursor: pointer;
    background-color: darkgray;
  }

  &.selected {
    background-color: darkgray;
  }
`;

export default CategoryList;
