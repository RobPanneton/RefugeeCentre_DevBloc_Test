import React from "react";

import styled from "styled-components";
import Catalog from "./Catalog";
import CategoryList from "./CategoryList";

const Shop = () => {
  return (
    <Wrapper>
      <CategoryList />
      <Catalog />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
`;

export default Shop;
