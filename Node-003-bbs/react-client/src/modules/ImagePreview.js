const filePreview = (file) => {
  const fileReader = new FileReader();
  fileReader.onload = (fe) => {
    return fe.target.result;
  };
  fileReader.readAsDataURL(file);
};

/**
 * input tag 에 의해 얻어진 files 데이터는 배열이지만 배열이 아니다
 * 이러한 배열을 유사배열 이라고 한다.
 * 일반적으로 배열처럼 작동이 되지만, forEach(map, filter 등 포함) 함수를
 * 사용할수 없다
 * 배열처럼 forEach() 를 사용하려면 배열로 변환시키는 과정이 필요하다
 */
const filesPreview = (files) => {
  // ES6 이상에서 유사배열을 진짜배열로 변환하는 method
  const fileArray = Array.from(files);

  const fileInforArray = fileArray.map((file) => {
    return filePreview(file);
  });
  return fileInforArray;
};

export { filePreview, filesPreview };
