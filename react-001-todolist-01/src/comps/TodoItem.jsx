// 부모 Component 에서 전달한 Properties 는 props 라는 키워드를
// 매개변수로 지정하여 받는다
const TodoItem = (props) => {
  return (
    <div className="item">
      <div className="delete">&times;</div>
      <div className="sdate">
        <div>{props.item.sdate}</div>
        <div>{props.item.stime}</div>
      </div>
      <div
        className={props.item.complete ? "content line" : "content"}
      >
        {props.item.content}
      </div>
      <div className="complete">&#x2713;</div>
    </div>
  );
};

export default TodoItem;
