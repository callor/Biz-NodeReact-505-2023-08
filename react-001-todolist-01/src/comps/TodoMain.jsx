import TodoInput from "./TodoInput";
import { useState } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { SampleData } from "../data/SampleTodo";

const TodoMain = () => {
  /**
   * State 끌어 올리기
   * TodoInput 과 TodoList 에 있던 state 들을
   *  TodoMain 부모 컴포넌트로 이동
   * 1. TodoInput 에서 입력된 content state 의 값을
   * 2. TodoList 의 todoList state 배열에 추가하여
   * 3. TodoList > TodoItem 을 통하여 화면에 출력을 해야한다
   *
   * 이 상황에서 TodoInput 과 TodoList 는 같은 부모의 형제간이다
   *    React 에서는 형제간에 state 를 절대 공유할수 없다
   *    React 부모가 만들어서 전달해준 State 만 볼수 있다
   *    자식이 만든 State 는 부모도 볼수 없다
   *
   * 이 상황을 해결하기 위하여 자식 Comps 있던 state와 state 함수를
   * 부모 Comps 인 TodoMain 으로 끌어 올리기를 한다
   * 그리고, 자식 Comps 에 전달해주어야 한다
   */
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([...SampleData]);

  return (
    <div className="todo">
      <TodoInput content={content} setContent={setContent} />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
