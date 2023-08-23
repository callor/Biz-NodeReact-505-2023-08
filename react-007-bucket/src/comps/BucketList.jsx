import BucketItem from "./BucketItem";
import css from "./BucketList.module.scss";
import { NavLink, useLoaderData } from "react-router-dom";

const BucketList = () => {
  const { bucketList } = useLoaderData();
  const BucketItemListView = bucketList?.map((item) => {
    return <BucketItem key={item.id} item={item} />;
  });
  return <ul className={css.buck_ul}>{BucketItemListView}</ul>;
};
export default BucketList;
