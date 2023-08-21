import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const StyledButton = styled.button`
  color: ${({ color }) => (color ? color : "#fff")};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "#7362ff"};
  border-radius: 5px;
  border: 0;
  outline: none;
  height: 55px;
  padding: 4px;
  margin: 4px 0px;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  &:hover {
    background-color: #a99fee;
  }
`;

const Button = ({ bgColor, color, children }) => (
  <Container>
    <StyledButton bgColor={bgColor} color={color}>
      {children}
    </StyledButton>
  </Container>
);
export default Button;
