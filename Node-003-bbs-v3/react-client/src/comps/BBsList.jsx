import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import css from "../css/BBsList.module.css";

const BBsList = () => {
  const navigate = useNavigate();

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

  /*
  JS 의 join() 함수 : 배열의 요소를 하나의 문자열로 변환하는 함수
  const arr = [1,2,3,4,5,6]
  const str = arr.join(" ")
  str => "1 2 3 4 5 6" 과 같은 문자열을 만들어 낸다
  */

  const tableClickHandler = (e) => {
    const target = e.target;
    // target 의 부모 중에서 가장 가까이 있는 TR 이 누구냐? select 하라
    const tr = target.closest("TR");
    // data-seq 로 설정한 데이터 가져오기
    // alert(tr.dataset.seq);
    navigate(`/bbs/detail/${tr.dataset.seq}`);
  };

  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>SEQ</th>
            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody onClick={tableClickHandler}>{bbsItems}</tbody>
      </table>
      <div className={css.main}>
        <NavLink
          to="/bbs/insert"
          className={[css.link, css.hover, "test"].join(" ")}
        >
          추가하기
        </NavLink>
      </div>
    </>
  );
};

export default BBsList;
