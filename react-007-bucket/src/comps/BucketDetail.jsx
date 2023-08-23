import { Form, useLoaderData } from "react-router-dom";
import dImage from "../assets/default.png";
import Button from "../shareComps/Button";
import css from "./BucketDetail.module.scss";
import { getBucket } from "../modules/bucketFech";

export const detailLoader = async ({ params }) => {
  // const id = params.id
  const { id } = params;
  const bucket = await getBucket(id);
  return { bucket };
};

const BucketDetail = () => {
  const { bucket } = useLoaderData();
  return (
    <article className={css.buck_detail}>
      <div className={css.first}>
        <img
          src={bucket?.img_src || dImage}
          alt={bucket?.bucket}
          width="100px"
        />
      </div>
      <div className={css.last}>
        <h1>{bucket.bucket || "None"}</h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form action="delete">
            <Button bgColor="red">삭제</Button>
          </Form>
        </div>
      </div>
    </article>
  );
};

export default BucketDetail;
