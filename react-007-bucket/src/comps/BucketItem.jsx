import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";
const BucketItem = ({ item }) => {
  return (
    <li>
      <NavLink to={`content/${item.id}`}>
        <img src={dImage} alt="" width="30px" height="30px" />
        <span>{item.bucket}</span>
      </NavLink>
    </li>
  );
};
export default BucketItem;
