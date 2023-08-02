/**
 * JSON 객체(JavaScript Object Notation)
 * {key:value} 쌍으로 구성된 데이터 type
 * */
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

// JSON 배열
const address = [
  { 이름: "홍길동", 나이: 16, 전화: "1111" },
  { 이름: "이몽룡", 나이: 26, 전화: "3333" },
  { 이름: "성춘향", 나이: 36, 전화: "4444" },
];
console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);

address.forEach((item) => {
  console.log("이름", item.이름, "나이", item.나이);
});
