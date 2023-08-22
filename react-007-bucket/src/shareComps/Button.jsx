import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "#7362ff"};
  border-radius: 5px;
  border: 0;
  outline: none;
  padding: 0.5rem 0.75rem;
  margin: 4px 0px;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.7);
  }
`;

const Button = (props) => {
  const { children, bgColor, color, type = "submit" } = props;
  return (
    <StyledButton bgColor={bgColor} color={color} type={type}>
      {children}
    </StyledButton>
  );
};
export default Button;
