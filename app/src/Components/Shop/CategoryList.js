import React from "react";

import styled from "styled-components";

const CategoryList = () => {
  return (
    <Wrapper>
      <CategoryContainer>
        <Category>All</Category>
        <Category>Electronics</Category>
        <Category>Jewelry</Category>
        <Category>Men's Clothing</Category>
        <Category>Women's Clothing</Category>
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
