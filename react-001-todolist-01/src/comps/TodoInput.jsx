import { useState } from "react";

// 여기는 Todo Content 를 입력하고 추가를 실행하는 Component
const TodoInput = (props) => {
  // 화면에 데이터를 Rendering 할때 사용할 State(변수) 선언
  // const [content, setContent] = useState("");

  // const [n1, n2] = ["대한민국","우리나라"]
  const { content, setContent } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={content}
        onChange={inputChangeHandler}
      />
      {/* 
      JSX 주석
      본문의 tag 내에서 사용하는 주석문

      button disabled 속성
      html 에서는 disabled="disabled" 라고 속성을 지정하면
      button tag 에 click 속성이 사라지는 효과를 낼수 있다
      button:disabled style 을 지정해주면 button disabled 가 설정되었을때
      모양을 만들 수 있다

      react 에서는 disabled={true} 라는 속성으로 사용한다

      */}
      <button disabled={content.length < 2}>추가</button>
    </div>
  );
};

export default TodoInput;
