import { Table } from "../styled/BBsStyled";
const BBsList = ({ children }) => {
  return (
    <Table>
      <thead>
        <tr className="list-tr">
          <th>No</th>
          <th>제목</th>
          <th>작성일자</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
export default BBsList;
