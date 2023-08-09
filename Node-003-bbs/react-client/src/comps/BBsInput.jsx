import { useState } from "react";
const BBsInput = () => {
  const [image, setImage] = useState("");

  return (
    <section className="main">
      <div className="bbs input">
        <input name="b_nickname" placeholder="작성" />
        <input name="b_title" placeholder="제목" />
        <input name="b_content" placeholder="내용" />
      </div>
      <div className="image main">
        <label htmlFor="main_image">대표이미지</label>
        <input id="main_image" type="file" accept="image/*" />
        <div className="thumb main">
          <img src={image ? image : ""} width="100px" />
        </div>
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
