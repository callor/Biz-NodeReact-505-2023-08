import moment from "moment";
import uuid from "react-uuid";
export const BBsDto = {
  id: uuid(),
  bWriter: "홍길동",
  bDate: moment().format("YYYY[-]MM[-]DD"),
  bSubject: moment().format("HH:mm:ss 게시판 작성"),
  bContent: "내용없음",
};
export const BBsList = [BBsDto, BBsDto, BBsDto];
