const useState = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum];
};
const [num, setNum] = useState(0);

const nations = ["대한민국", "우리나라"];
console.log(nations);
const [n1, n2] = nations;
const nation1 = nations[0];
const nation2 = nations[1];

console.log("n1", n1);
console.log("n2", n2);
// console.log(대한민국);
// console.log(korea);

const nations2 = [...nations, "Korea"];
console.log(nations2);

// nations 배열을 nations3 에 복사하라
const nations3 = nations;
console.log("1", nations);
console.log("3", nations3);
nations3[0] = "Republic";
console.log("1", nations);

const nations4 = [...nations];
nations4[0] = "Republic of Korea";
console.log("1", nations);

const nations5 = [];
for (let nation of nations) {
  nations5.push(nation);
}
