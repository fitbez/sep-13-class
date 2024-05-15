import ProductListItem from "../product-list-item/product-list-item";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../context";

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledProductListContainer = styled.div`
  padding: 1rem 4rem;
`;

const StyledViewMore = styled.p`
  color: #11ccf4;
  cursor: pointer;
`;

const ProductList = () => {
  const { handleViewMore } = useContext(ProductContext);
  return (
    <StyledProductListContainer>
      <h1>New Products</h1>
      <StyledProductList>
        <ProductListItem />
      </StyledProductList>
      <StyledViewMore onClick={handleViewMore}>view more</StyledViewMore>
    </StyledProductListContainer>
  );
};

export default ProductList;
