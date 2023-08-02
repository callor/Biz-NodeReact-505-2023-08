import { useState } from "react";

/**
 *
 * @returns HTML tag 를 생성하는 코드
 * HTML tag 를 생성하는 코드를 return 하는 함수를
 * React 에서는 Component 라고 한다
 */

const Input = () => {
  const [nation, setNation] = useState("");
  // const nation = ""
  // const setNation = ()

  const inputChangeHandler = (e) => {
    setNation(e.target.value);
  };
  return (
    <div>
      <input value={nation} onChange={inputChangeHandler} />
      <div>{nation}</div>
    </div>
  );
};
export default Input;
