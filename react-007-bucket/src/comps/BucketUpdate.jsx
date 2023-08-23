import {
  Form,
  useLoaderData,
  redirect,
  useSubmit,
} from "react-router-dom";
import css from "./BucketUpdate.module.scss";
import Button from "../shareComps/Button";
import { getBucket, saveBucket } from "../modules/bucketFech";
import dImage from "../assets/default.png";
import { useRef } from "react";

/**
 * 현재 컴포넌트에서 Form 내의 버튼이 submit 을 실행하면
 * --> form tag 내의 button 은 기본적으로 submit 동작을 가지고 있다
 *    form tag 내의 button 을 클릭하면 form 에 입력한 데이터를 서버로
 *    전송하려는 성질이 있다
 * React 에서는 기본적으로 Server 개념이 없는데, react-router 가 서버처럼
 * Form 에 담긴 데이터를 처리하는 과정을 수행한다
 * 데이터 처리를 하는 함수가 action 함수이다
 * 이 함수를 react 가 호출할때  2개의 매개변수 값을 전달하는데
 * request, params  이다
 * request : Form 의 input 에 입력된 데이터가 담겨전달되는 객체
 * params : 주소창에 params 변수의 값이 담겨 전달되는 객체
 */

export const updateAction = async ({ request, params }) => {
  const { id } = params;
  const result = await getBucket(id);

  // Form 에 담겨서 전달되는 데이터 객체
  const formData = await request.formData();

  // formData 로 부터 input box 에 입력한 데이터만 별도로 추출하기
  // 데이터만 json type 으로 추출해 준다
  const inputBucket = Object.fromEntries(formData);
  // DB 로부터 SELECT 한 bucket 에 input 으로 입력한 데이터를
  // Update 하여 새로운 bucket 생성하기
  const newBucket = { ...result, ...inputBucket };
  await saveBucket(newBucket);
  return redirect(`/content/${id}`);
};

const BucketUpdate = () => {
  const { bucket } = useLoaderData();
  const imgRef = useRef();
  const submit = useSubmit();

  const imageOnClick = () => {
    imgRef.current.click();
  };

  const onFileChange = (e, bucket) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = async () => {
        console.log(reader.result);
        await saveBucket({ ...bucket, img_src: reader.result });
        return submit(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form method="POST" className={css.bucket_form}>
      <article className={css.first}>
        <input
          type="file"
          onChange={(e) => onFileChange(e, bucket)}
          accept="image/*"
          ref={imgRef}
        />
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
        <div className={css.btn}>
          <Button>저장</Button>
        </div>
      </article>
      <article className={css.image}>
        <img
          src={bucket.img_src || dImage}
          alt=""
          onClick={imageOnClick}
        />
      </article>
    </Form>
  );
};
export default BucketUpdate;
