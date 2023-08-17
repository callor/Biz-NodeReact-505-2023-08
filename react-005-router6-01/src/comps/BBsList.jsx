import styled from "styled-components";
/**
 * 원래 제공되는 react comps 인 table 에 styled 를 적용하여
 * 새로운 Component 로 재 생성하기
 */
const Table = styled.table`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  & > .list-tr {
    border-bottom: 1px solid #ddd;
  }
  & th {
    padding: 5px;
    background-color: #aaa;
  }
`;

const BBsList = () => {
  return (
    <Table>
      <tr className="list-tr">
        <th>No</th>
        <th>제목</th>
        <th>작성일자</th>
        <th>작성자</th>
        <th>조회수</th>
      </tr>
    </Table>
  );
};
export default BBsList;
