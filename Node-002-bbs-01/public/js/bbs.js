document.addEventListener("DOMContentLoaded", () => {
  const btn_insert = document.querySelector("button.bbs.insert");
  const b_image = document.querySelector("#b_image");
  const b_images = document.querySelector("#b_images");

  const mainImageThumb = document.querySelector("div.image.main");
  const galleryImageThumb = document.querySelector(
    "div.image.gallery"
  );

  b_images?.addEventListener("change", (e) => {
    const files = e.target.files;
    galleryImageThumb.innerHTML = "";
    imagesPreview(e.target, galleryImageThumb);
    // for (let file of files) {
    //   const reader = new FileReader();
    //   reader.onload = (fe) => {
    //     const img = document.createElement("img");
    //     img.src = fe.target.result;
    //     img.width = 100;
    //     img.height = 100;
    //     galleryImageThumb.appendChild(img);
    //   };
    //   reader.readAsDataURL(file);
    // }
  });

  // type="file" 인 input box 에서 파일을 선택한 후 발생하는 event
  b_image?.addEventListener("change", (e) => {
    // input box e.target 으로 부터 files 객체를 참조하고
    // 0번째 요소만 getter
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (fe) => {
      const img = document.createElement("img");
      console.log(fe.target.result);
      img.src = fe.target.result;
      img.width = 100;
      img.height = 100;
      mainImageThumb.innerHTML = "";
      mainImageThumb.appendChild(img);
    };
    reader.readAsDataURL(file);
    /*
    img.src = URL.createObjectURL(file);
    img.width = 100;
    img.height = 100;
    mainImageThumb.innerHTML = "";
    mainImageThumb.appendChild(img);
    */
  });

  btn_insert?.addEventListener("click", () => {
    // GET /bbs/insert 요청하기
    document.location.href = "/bbs/insert";
  });
});
