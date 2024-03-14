import { products } from "../../data";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const StyledImage = styled.img`
  width: 176px;
  height: 98px;
`;

const StyledCard = styled.div`
  height: 200px;
  width: 176px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem;
`;

const StyledContent = styled.div`
  padding: 1rem;
`;

const StyledProductName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 14px;
`;
const StyledDescription = styled.p`
  padding: 0;
  margin: 0.3rem 0;
  font-size: 10px;
`;
const StyledPrice = styled.p`
  padding: 0;
  margin: 0;
`;

const StyledCartAndPrice = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export default function ProductListItem() {
  return (
    <>
      {products.map((item, index) => {
        return (
          <StyledCard key={index}>
            <StyledImage src={item.image} alt="" />
            <StyledContent>
              <StyledProductName>
                <strong>{item.name}</strong>
              </StyledProductName>
              <StyledDescription>{item.description}</StyledDescription>
              <StyledCartAndPrice>
                <FontAwesomeIcon icon={faCartShopping} />
                <StyledPrice>${item.price}</StyledPrice>
              </StyledCartAndPrice>
            </StyledContent>
          </StyledCard>
        );
      })}
    </>
  );
}
