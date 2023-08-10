import { useBBsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";

const sampleData = [
  { b_seq: 0, b_nickname: "홍길동", b_title: "활빈당" },
  { b_seq: 1, b_nickname: "이몽룡", b_title: "남원부사" },
  { b_seq: 2, b_nickname: "성춘향", b_title: "광환루" },
  { b_seq: 3, b_nickname: "임꺽정", b_title: "황해도 대도" },
  { b_seq: 4, b_nickname: "장녹수", b_title: "여걸" },
];
const BBsList = () => {
  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>
          <img
            src={`/static/upload/${bbs.b_image}`}
            width="50px"
            alt={bbs.b_origin_name}
          />
          <span>{bbs.b_nickname}</span>
        </td>
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
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};

export default BBsList;
