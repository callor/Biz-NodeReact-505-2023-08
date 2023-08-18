import { InputDiv } from "../styled/BBsStyled";
import { Button } from "../styled/MyButton";

const BBsInput = ({ bbsDto, setBbsDto, bbsInput }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBbsDto({ ...bbsDto, [name]: value });
  };

  const btnOnClickHandler = () => {
    bbsInput();
  };

  return (
    <>
      <InputDiv>
        <label htmlFor="">작성자</label>
        <input
          type="text"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">제목</label>
        <input
          type="text"
          value={bbsDto.bSubject}
          name="bSubject"
          onChange={inputOnChange}
        />
      </InputDiv>
      <InputDiv>
        <label htmlFor="">내용</label>
        <textarea
          rows={10}
          value={bbsDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        />
      </InputDiv>
      <Button type="button" onClick={btnOnClickHandler}>
        저장
      </Button>
    </>
  );
};

export default BBsInput;
