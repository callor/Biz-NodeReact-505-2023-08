const address = {
  이름: "홍길동",
  전화: "010-111-1111",
  나이: 16,
};
console.log(address);
address.나이 = 20;
console.log(address);

// address 객체를 새로운 객체로 복사하면서
// 이름 항목만 데이터를 바꾸고 싶다
const newAddress = { ...address, 이름: "이몽룡" };
console.log(newAddress);

const newAddress1 = { ...address, 주소: "서울시" };
console.log(newAddress1);

newAddress1.취미 = "등산";
console.log(newAddress1);
