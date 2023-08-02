// 함수 모듈
// consts sum = (num1, num2) = {return num1 + num2 }
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => {
  const [numA, numB] = [num2, num1];
  return numA - numB;
};
const mul = (num1, num2) => num1 * num2;
const Rt = () => "대한민국";

// js 코드에서 한개의 함수에만 지정할 수 있다
// default 로 export 한 함수는 자신의 이름을 "잊는다"
export default Rt;
// default 로 지정되지 않은 함수들은 자신의 이름으로 export 되어야 한다
export { sum, sub, mul };
