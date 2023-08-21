// 완전한 ES6 함수 코드
// 함수 본체에 한줄짜리 코드만 있을경우
import { useState } from "react";
import styled from "styled-components";
import Input from "../shareComps/Input";

const ASideBar = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: #f7f7f7;
  border-right: solid 2px #aaa;
  display: flex;
  flex-direction: column;
  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

// return 명령과 {} 를 생략할 수 있다
const BucketMain = () => {
  const [bucket, useBucket] = useState();
  return (
    <>
      <ASideBar>
        <Input />
      </ASideBar>
      <div></div>
    </>
  );
};

export default BucketMain;
