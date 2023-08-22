import styled from "styled-components";
import BucketInput from "./BucketInput";
import { useLoaderData } from "react-router-dom";

const ASideBar = styled.aside`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 2px #cccc;
  display: flex;
  flex-direction: column;
`;

const BucketMain = () => {
  const { bucketList } = useLoaderData();
  const bucketItemListView = bucketList.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <>
      <ASideBar>
        <BucketInput />
        <ul>{bucketItemListView}</ul>
      </ASideBar>
      <div>
        <h1>Detail</h1>
      </div>
    </>
  );
};
export default BucketMain;

// export default BucketMain = () => {
//   return <h1>여기는 Bucket Main</h1>;
// };
