import { Form, InputDiv } from "../styled/BBsStyled";
const BBsInput = () => {
  return (
    <Form>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input type="text" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input type="text" />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea rows={10} />
      </InputDiv>
    </Form>
  );
};

export default BBsInput;
