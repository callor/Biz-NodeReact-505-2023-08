import {
  Form,
  useLoaderData,
  redirect,
  Navigate,
} from "react-router-dom";
import dImage from "../assets/default.png";
import Button from "../shareComps/Button";
import css from "./BucketDetail.module.scss";
import {
  deleteBucket,
  getBucket,
  saveBucket,
} from "../modules/bucketFech";

export const detailLoader = async ({ params }) => {
  // const id = params.id
  const { id } = params;
  const bucket = await getBucket(id);
  if (!bucket) {
    return redirect("/");
  }
  return { bucket };
};

export const completeAction = async ({ params }) => {
  const bucket = await getBucket(params.id);
  console.log("Bucket", bucket);
  const completBucket = { ...bucket, complete: !bucket.complete };
  await saveBucket(completBucket);
  return redirect(`/content/${params.id}`);
};

export const deleteAction = async ({ params }) => {
  if (window.confirm("정말 삭제 할까요?")) {
    await deleteBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};

export const favoriteAction = async ({ params, request }) => {
  const formData = await request.formData();
  const resultBucket = await getBucket(params.id);
  // formData() 데이터 중에서 input 에 저장된 데이터만 추출하기
  // const newBucket = Object.fromEntries(formData);
  const favorite = formData.get("favorite") === "true";
  const updateBucket = { ...resultBucket, favoite: !favorite };
  await saveBucket(updateBucket);
  return "";
};

const Favorite = ({ bucket }) => {
  let favorite = bucket.favoite;
  return (
    <Form method="POST">
      <button name="favorite" value={favorite ? "true" : "false"}>
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
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
        <h1>
          {bucket.bucket || "None"}
          <Favorite bucket={bucket} />
        </h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form action="complete" method="POST">
            <Button bgColor={bucket.complete ? "orange" : "green"}>
              {bucket.complete ? "완료취소" : "완료"}
            </Button>
          </Form>
          <Form action="delete" method="POST">
            <Button
              className={css.delete}
              bgColor="red"
              // type={bucket.complete ? "button" : "submit"}
              disabled={bucket.complete ? "disabled" : ""}
            >
              삭제
            </Button>
          </Form>
        </div>
      </div>
    </article>
  );
};

export default BucketDetail;
