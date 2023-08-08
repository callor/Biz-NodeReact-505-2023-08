import { useState, useRef } from "react";
import { BBsDto } from "../data/BBsDto";

const BBsInput = () => {
  const [bbs, setBbs] = useState(BBsDto);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const thumbImages = images.map((image) => {
    return <img src={image} width="50px" />;
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };

  // type 이 file 인 input 에서 파일이 선택되었을때 발생하는 event
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);
    // console.log(file.name);
  };

  // 멀티파일 선택했을때  thumbnail 보여주기
  const filesChangeHandler = (e) => {
    /**
     * JS 에서는 진짜배열과 유사배열이 있다
     * 진짜배열은 순수하게 데이터만 가지고 있는 배열
     * const arr = [1,2,3,4,5,5,6,7,7,8]
     *
     * img tag 들을 요소로 갖는 배열 : 유사배열
     * const images = document.querySelectAll("img")
     * console.log(images[0].src)
     *
     * 고전적인 for 반복문은 정상적으로 작동된다
     * for(let i = 0 ; i < images.length ; i++) {
     *      console.log(images[i].src)
     * }
     *
     * 새로운 forEach(map, filter 등등이 포함) 는 사용 불가!!
     * images.forEach(image=.{} )
     *
     * 만약 유사배열을 새로운 forEach() 로 사용하기 위해서는
     * 진짜배열로 변환해 주어야 한다.
     * const 진짜배열 = Array.from(유사배열) : 유사배열을 진짜 배열로 변환
     *
     */

    const files = e.target.files;
    console.log(files.length);
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onloadend = (fe) => {
        // setImages() 가 files 의 개수만큼 실행되는 구조
        // 만약에 files 개수가 10개 이면 setImages() 함수가 10번 실행되고
        // 화면이 10번 reRendering 될것이다
        // 현재버전의 React 에서는 여러번의 setState() 함수가 반복 실행되면
        // 이들을 모아서 한번에 Batch 처리를 해 버린다
        // 때문에 원하는 데이터가 state 에 반영이 되지 않는다
        // 그래서 setState() 에 데이터를 직접 주입하지 않고
        // Callback 함수 방식으로 주입한다
        setImages((images) => [...images, fe.target.result]);
      };
      fileReader.readAsDataURL(file);
    });
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
          ref={imageRef}
        />
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
          ref={imagesRef}
          onChange={filesChangeHandler}
        />
        <div className="thumb gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
