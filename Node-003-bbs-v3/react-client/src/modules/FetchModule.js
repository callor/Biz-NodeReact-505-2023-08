/**
 * 매직스트링, 매직넘버링 사용금지!!
 *  코딩을 하다보면 따옴표로 둘러쌓인 문자열, 직접 숫자로 작성된 데이터를
 *  사용할일이 많다.
 *  이러한 데이터가 어딘선가 비교문에서 사용되거나, 참조되는 경우
 *  문자열의 경우 대소문자, 스펠링, 띄어쓰기
 *  숫자의 경우 예기치 못한 값이 포함되어 전체 로직에 문제가 발생할수 있다
 *  그런데 이러한 문제는 쉽게 발견이 어렵다
 *
 * 매직 리터럴(스트링, 숫자 값)을 직접 사용하지 말고
 * 전역적으로 변수를 선언하고 그 변수를 참조하여 코딩하는 것이 조금이나마
 * 오류를 방지할수 있다
 *
 */
// java final static 으로 문자열을 미리 만들어두고 가져다 사용하는 것을
// JS 에서 응용하기 위한 것
const URL = {
  HELLO: "/bbs",
  BBS_INSERT: "/bbs/insert",
};

// 함수 선언문에 export 를 붙이면 개별 함수가 export 된다
// export {hello} 한 것과 같다
export const hello = async () => {
  // proxy 설정된 URL 과 합성하여 http://localhost:3000/bbs 로 요청
  const res = await fetch(URL.HELLO);
  const json = await res.json();
  return json.title;
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL.BBS_INSERT, fetchData);
};
