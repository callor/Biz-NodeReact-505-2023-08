/**
 * 호이스팅
 * add() 함수가 선언되기전에 호출된 경우
 * 실행될때 호출부분과 선언부가 서로 섞여서 정렬되는 과정이 필요
 */
add(30, 40);
function add(num1, num2) {
  console.log(num1 + num2);
}

add1(50, 20);
const add1 = function (num1, num2) {
  console.log(num1 + num2);
};

const add2 = (num1, num2) => {
  console.log(num1 + num2);
};
