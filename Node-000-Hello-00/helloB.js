/**
 * JS 의 배열은 데이터형이 여러가지 섞여있어도 가능하다
 * Java 에서의 배열은 반드시 같은 데이터형만 가능하다
 */
const arrayValue = [10, 20, 30, "우리나라", "대한민국"];
console.log(arrayValue);

//  배열 복사
/**
 * 얕은 복사, 배열의 주소만 복사되어 원본과 복사본 배열이 동일한 배열
 * 만약 복사본 배열의 요소중 값이 변경되면 원본도 같이 변경된다
 */
const arrayValue1 = arrayValue;
/**
 * 전개연산자(...Spread operation)를 이용한 깊은 복사
 * 배열의 요소값 한개한개를 일일이 모두 복사는 방법
 * 원본과 복사본이 완전히 동일한 값을 갖지만
 * 복사본과 원본은 서로 다른 기억장치에 저장된다
 * 복사본 배열의 요소값을 변경하여도 원본에는 영향을 미치지 않는다
 */
const arrayValue2 = [...arrayValue];
/**
 * ES5 이전의 JS 에서 사용하는 for 반복문을 이용한 깊은 복사
 */
const arrayValue3 = [];
for (let array of arrayValue) {
  arrayValue3.push(array);
}

const arrayValue4 = [];
for (let index = 0; index < arrayValue.length; index++) {
  arrayValue4[index] = arrayValue[index];
}

const arrayValue5 = [];
arrayValue.forEach((item) => {
  arrayValue5.push(item);
});
