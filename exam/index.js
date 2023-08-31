// console.log("Hello");

const multi = (num) => {
  if (num % 3 === 0) return true;
  else return false;
};

const nums = [48, 84, 12, 72, 48, 24, 66, 66, 48];
for (let i = 0; i < nums.length; i++) {
  const result = multi(nums[i]);
  if (result) {
    console.log(`${nums[i]} 테스트 케이이스는 3의 배수`);
  }
}

const prime = (num) => {
  console.log(num);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 0;
  }
  return num;
};

console.log(prime(11));
const nums1 = [11, 61, 17, 11, 19, 7, 43, 71];
for (let i = 0; i < nums1.length; i++) {
  const result = prime(nums1[i]);
  if (result > 0) {
    console.log(`테스트 케이스 ${nums1[i]}은 소수입니다`);
  }
}
