import moment from "moment";
import uuid from "react-uuid";
export const BBsDto = {
  id: "",
  bWriter: "",
  bDate: moment().format("YYYY[-]MM[-]DD"),
  bSubject: "",
  bContent: "",
};
export const BBsList = [BBsDto, BBsDto, BBsDto];
