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
  &:disabled:hover {
    box-shadow: none;
  }
`;

/**
 * JS 의 Rest 매개변수
 * 매개변수의 개수가 명확하게 정해지 않은 경우
 * 명시적인 매개변수와 함께 Rest 매개변수를 사용할수 있다
 * 명시적인 매개변수는 각각의 변수에 값을 할당 할수 있고
 * 그외 나머지는 Rest 매개변수에 배열로 받는다
 * Rest 매개변수는 가장 마지막에 받는다
 */
const Button = (props) => {
  const {
    children,
    type = "submit",
    bgColor,
    color,
    ...args
  } = props;
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      type={type}
      {...args}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
