import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 80%;
    & h1 {
      color: blue;
      text-shadow: 1px 1px 1px black;
    }
  }
`;

const BucketIndex = () => {
  return (
    <Container>
      <div>
        <h1>나의 버킷 리스트</h1>
      </div>
    </Container>
  );
};
export default BucketIndex;
