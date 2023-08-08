import { useState, useRef } from "react";
import { BBsDto } from "../data/BBsDto";

const BBsInput = () => {
  const [bbs, setBbs] = useState(BBsDto);
  const [image, setImage] = useState();
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };

  // type 이 file 인 input 에서 파일이 선택되었을때 발생하는 event
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
  };

  return (
    <section className="main">
      <div className="bbs input">
        <input
          name="b_nickname"
          placeholder="작성"
          value={bbs.b_nickname}
          onChange={inputChangeHandler}
        />
        <input
          name="b_title"
          placeholder="제목"
          value={bbs.b_title}
          onChange={inputChangeHandler}
        />
        <input
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
        />
        <div className="thumb main"></div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_image">겔러리</label>
        <input
          id="gallery_image"
          type="file"
          accept="image/*"
          multiple="multiple"
        />
        <div className="thumb gallery"></div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
