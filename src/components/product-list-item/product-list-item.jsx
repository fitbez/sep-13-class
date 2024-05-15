import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  cursor: pointer;
`;

const StyledContent = styled.div`
  padding: 1rem;
`;

const StyledProductName = styled.p`
  display: flex;
  justify-content: space-between;
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
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const handleDelete = (event, id) => {
    event.stopPropagation();
    try {
      axios.delete(`http://localhost:5000/api/product/product/${id}`);
      const updatedProducts = products.filter((item) => item.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      {products.map((item, index) => {
        return (
          <StyledCard
            key={index}
            onClick={(event) => {
              navigate(`/details/?product=${item.id}`);
            }}
          >
            <StyledImage src={item.image} alt="" />
            <StyledContent>
              <StyledProductName>
                <strong>{item.product_name}</strong>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="#f25c54"
                  onClick={(event) => handleDelete(event, item.id)}
                />
              </StyledProductName>
              <StyledDescription>{item.sumDescription}</StyledDescription>
              <StyledCartAndPrice>
                <FontAwesomeIcon icon={faCartShopping} />
                <StyledPrice>Price: ${item.price}</StyledPrice>
              </StyledCartAndPrice>
            </StyledContent>
          </StyledCard>
        );
      })}
    </>
  );
}
