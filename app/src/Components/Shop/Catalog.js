import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import ItemCard from "./ItemCard";

const Catalog = () => {
  const shopInv = useSelector((state) => state?.shop?.shopInv);
  const categoryFilter = useSelector((state) => state?.shop?.categorySelected);

  const [catalogDisplay, setCatalogDisplay] = useState([]);

  useEffect(async () => {
    if (categoryFilter === "All") {
      await setCatalogDisplay(shopInv);
    }

    if (categoryFilter && categoryFilter !== "All") {
      const filteredResults = shopInv.filter(
        (item) => item.category === categoryFilter
      );
      await setCatalogDisplay(filteredResults);
    }

    return;
  }, [categoryFilter, shopInv]);

  return (
    <Wrapper>
      <h1>SHOP</h1>
      {catalogDisplay ? (
        <>
          {" "}
          <CatalogContainer>
            {catalogDisplay.map((item) => {
              return <ItemCard item={item} />;
            })}
          </CatalogContainer>
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding-top: 52px;
    font-size: 52px;
  }
`;

const CatalogContainer = styled.div`
  min-width: 100%;
  padding: 32px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Catalog;
