import { useParams } from "react-router-dom";
const BucketDetail = () => {
  const params = useParams();
  return <h1>{params.id}</h1>;
};

export default BucketDetail;
