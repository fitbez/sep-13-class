import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  border: ${(props) => props.$border};
  width: 150px;
  padding: 10px 10px;
  color: ${(props) => props.$color};
  margin-left: 4rem;
  border-radius: 4px;
`;

function Button(props) {
  console.log("props", props);
  return (
    <StyledButton
      $color={props.color}
      $backgroundColor={props.backgroundColor}
      $border={props.border}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;
