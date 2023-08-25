import uuid from "react-uuid";
import moment from "moment";

export const newBucketDto = () => {
  const bucketDto = {
    id: uuid(),
    img_src: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    bucket: "새로운 Bucket",
    complete: false,
    favorite: false,
  };
  return bucketDto;
};
