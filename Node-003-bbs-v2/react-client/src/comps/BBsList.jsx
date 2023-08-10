import { NavLink } from "react-router-dom";
import { useState } from "react";

const BBsList = () => {
  const [bbsList, setBbsList] = useState([
    { b_seq: 0, b_nickname: "홍길동", b_title: "활빈당" },
    { b_seq: 1, b_nickname: "이몽룡", b_title: "남원부사" },
    { b_seq: 2, b_nickname: "성춘향", b_title: "광환루" },
    { b_seq: 3, b_nickname: "임꺽정", b_title: "황해도 대도" },
    { b_seq: 4, b_nickname: "장녹수", b_title: "여걸" },
  ]);

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>{bbs.b_nickname}</td>
        <td>{bbs.b_title}</td>
        <td>0</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>SEQ</th>
          <th>작성자</th>
          <th>제목</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>{bbsItems}</tbody>
    </table>
  );
};

export default BBsList;
