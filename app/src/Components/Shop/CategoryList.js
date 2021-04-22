import React from "react";
import {useDispatch} from "react-redux";

import {changeCategory} from "../../Redux/actions";

import styled from "styled-components";

const CategoryList = () => {
  const dispatch = useDispatch();



  return (
    <Wrapper>
      <CategoryContainer>
        <Category
        onClick={() => dispatch(changeCategory("All"))}
        >All</Category>
        <Category
        onClick={() => dispatch(changeCategory("electronics"))}>Electronics</Category>
        <Category
        onClick={() => dispatch(changeCategory("jewelery"))}>Jewelery</Category>
        <Category
        onClick={() => dispatch(changeCategory("men's clothing"))}
        >Men's Clothing</Category>
        <Category       
        onClick={() => dispatch(changeCategory("women's clothing"))}
        >Women's Clothing</Category>
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
  border: 1px black solid;
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
`;

export default CategoryList;
