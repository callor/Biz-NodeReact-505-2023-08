import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";

// initData.js 에서 export 한 함수들 중에서
// initData() 함수만 필요하니 구조분해를 통하여 import
import { initData } from "../data/initData";

// uuid.func()
// uuid()
// react-uuid 의 export type 이 무엇일까?
import uuid from "react-uuid";

// dto.initData()
// dto.func1()
// import dto from "../data/initData"

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

  // initData() 함수를 실행하여
  // initData() 함수가 생성한(return 한) 객체로 todo 를 초기화
  const [todo, setTodo] = useState(() => initData());
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("Use Effect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  // 입력한 TodoContent 를 사용하여 새로운 Todo 추가하기
  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };

  // Todo 완료처리
  const itemComplete = (id) => {
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        // todo.complete 속성을 반전(NOT)시키기
        // true 이면 false, false 이면 true
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    // id 에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제 할거야?")) {
      // list를 forEach 하면서 item의 id 와 일치하는 데이터가 있으면
      // 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 Id 와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  // Content 를 클릭했을때 선택된 item 을 찾아주는 함수
  const updateItemSelect = (id) => {
    // 전달받은 id 값은 PK 적인 성질을 가지므로
    // id 에 해당하는 List 만 추출하면 그결과는 item 이
    // 한개인 List 가 생성된다
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });
    // update 를 위한 Todo 데이터 생성
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을때
  // Update and Insert 를 실행하는 함수
  const todoInput = (content) => {
    // id 값이 null 또는 "" 이면 List 에 추가하기
    if (!todo.id) {
      todoListAdd(content);
      // id 값이 null 또는 "" 이 아니면 Update 실행
    } else {
      const updateTodo = { ...todo, content: content };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo; // { ...item, content: content };
        }
        return item;
      });
      // setState 함수
      setTodoList(updateTodoList);
    }
    // Add 또는 Update 를 실행 후 Todo 를 초기화 하기
    // setTodo(initData());
  };

  return (
    <div className="todo">
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        todoInput={todoInput}
      />
      <TodoList
        itemDelete={itemDelete}
        todoList={todoList}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
