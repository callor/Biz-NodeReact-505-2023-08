import { Form, useLoaderData } from "react-router-dom";
import css from "./BucketUpdate.module.scss";

const BucketUpdate = () => {
  const { bucket } = useLoaderData();
  return (
    <Form method="POST" className={css.bucket_form}>
      <article className={css.first}>
        <div>
          <label htmlFor="">작성일자</label>
          <input
            type="date"
            name="sdate"
            defaultValue={bucket.sdate}
          />
        </div>
        <div>
          <label htmlFor="">작성시각</label>
          <input
            type="time"
            name="stime"
            defaultValue={bucket.stime}
          />
        </div>
        <div>
          <label htmlFor="">하고싶은일</label>
          <input name="bucket" defaultValue={bucket.bucket} />
        </div>
        <div>
          <button>저장</button>
        </div>
      </article>
    </Form>
  );
};
export default BucketUpdate;
