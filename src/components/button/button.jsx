import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => props.$border};
  width: 150px;
  padding: 10px 10px;
  color: ${(props) => props.$color};
  margin-left: 4rem;
  border-radius: 4px;
  cursor: pointer;
`;

function Button(props) {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    console.log("clicked");
    navigate("/add-product");
  };

  console.log("props", props);
  return (
    <StyledButton
      $color={props.color}
      $backgroundColor={props.backgroundColor}
      $border={props.border}
      onClick={handleAddProduct}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;
