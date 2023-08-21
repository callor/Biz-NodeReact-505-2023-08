import Input from "../shareComps/Input";
import Button from "../shareComps/Button";
import style from "./BucketInput.module.css";

import { Form } from "react-router-dom";

// export const inputAction = () => {
//   return <Navigate to="content/3" />;
// };

const BucketInput = () => {
  return (
    <div className={style.input_box}>
      <Input />
      <Form method="get" action="content/new">
        <Button>새로작성</Button>
      </Form>
    </div>
  );
};
export default BucketInput;
