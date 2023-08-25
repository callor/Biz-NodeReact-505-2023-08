import styled from "styled-components";
import Button from "../shareComps/Button";
const Container = styled.div`
  width: 200px;
`;
export default {
  title: "커스텀 버튼",
  component: [Button],
};

export const 기본버튼 = () => (
  <Container>
    <Button>클릭</Button>
  </Container>
);

export const 빨간버튼 = () => (
  <Container>
    <Button bgColor="red">클릭</Button>
  </Container>
);
