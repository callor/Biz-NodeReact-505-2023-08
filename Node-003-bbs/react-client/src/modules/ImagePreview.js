/**
 * fileReader 에 의해서 load 가 완료되면
 * 파일 정보를 return 해 주기를 바라는 코드
 *
 * 이 코드에서 return fe.target.result 가 가장 마지막에
 * 실행되고 그 결과를 return 해주기를 바라고 있다
 * 하지만 비동기 특성상 2번항목인 fileReader.read...() 함수가
 * 실행된 다음 filePreView 함수는 종료되어 버린다
 * 결국 return null 을 실행하는 결과만 만들어 낸다
 *
 * 최신 JS 에서는 async, await 를 사용하여 비동기를 동기 방식으로
 * 사용할수 있다.
 * 하지만 상당부분의 JS 코드에서 async await 를 사용하지 못하는 경우가 있다
 *
 * 이때는 코드 전체를 Promise 객체로 생성하여 동기를 보장해 주어야 한ㄷ
 */

const filePreview = (file) => {
  /**
   * 먼저 동기방식으로 작동되기를 바라는 코드를 Promise() 클래스의
   * 생성자에 callback  함수내에 작성한다
   * callback 함수에는 resolve() 라는 매개변수 함수를 설정한다
   * 그리고 가장 마지막에 실행되어 결과를 return 하고자 하는 코드를
   * resolve() 함수로 감싼다 이때 return 명령은 사용하지 않는다
   * resolve() 함수는 가장 마지막에 실행될 코드를 실행하고
   * 그 결과를 return 한다
   */
  return new Promise((resolve) => {
    //1
    const fileReader = new FileReader();
    //3
    fileReader.onload = (fe) => {
      // 4
      resolve(fe.target.result);
    };
    //2
    fileReader.readAsDataURL(file);
  });
  //   return null;
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

  const fileInforArray = fileArray.map(async (file) => {
    return await filePreview(file);
  });
  return fileInforArray;
};

export { filePreview, filesPreview };
