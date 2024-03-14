import ProductListItem from "../product-list-item/product-list-item";
import styled from "styled-components";

const StyledProductList = styled.div`
  display: flex;
`;

const StyledProductListContainer = styled.div`
  padding: 1rem 4rem;
`;

const ProductList = () => {
  return (
    <StyledProductListContainer>
      <h1>New Products</h1>
      <StyledProductList>
        <ProductListItem />
      </StyledProductList>
    </StyledProductListContainer>
  );
};

export default ProductList;
