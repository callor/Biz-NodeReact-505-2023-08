import styled from "styled-components";
const Form = styled.form`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 10px;
`;

const InputDiv = styled.div`
  width: 90%;
  display: flex;
  & label {
    flex: 1;
    margin: 5px;
    padding: 8px;
  }
  & input {
    flex: 3;
    margin: 5px;
    padding: 8px;
  }
  & textarea {
    flex: 3;
  }
`;

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
        <textarea />
      </InputDiv>
    </Form>
  );
};

export default BBsInput;
