/**
 * 테스트 케이스 00 은 3의 배수입니다.
 */
const num = 3;
if (num % 3 == 0) console.log(`${num} 는 3의 배수`);

// Test 를 하고자 하는 함수
const multi = (num) => {
  if (num % 3 == 0) return true;
  else return false;
};

// TestCase : 3의 배수들
const nums = [48, 84, 12, 72, 48, 24, 66, 66, 48];

// TestCode
for (let i = 0; nums.length; i++) {
  const result = multi(nums[i]);
  if (result) console.log(`${nums[i]} 는 3의 정수`);
}

if (multi(48)) console.log(`48 은 3의 정수`);
if (multi(48)) console.log(`48 은 3의 정수`);
if (multi(48)) console.log(`48 은 3의 정수`);
if (multi(48)) console.log(`48 은 3의 정수`);
if (multi(48)) console.log(`48 은 3의 정수`);

const prime = (num) => {
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Test case
nums = [11, 61, 17, 19, 7, 43, 71, 1];
// prime() 함수를 검증하기 위한 Test Code
for (num of nums) {
  if (prime(num)) console.log(`${num} 는 소수`);
}

const primeSum = (nums) => {
  let sum = 0;
  const prime = (num) => {
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  for (num of nums) {
    if (prime(num)) sum += num;
  }
  return sum;
};

nums = [72, 12, 81, 39, 54, 16, 12, 40, 23, 13];
if (primeSum(nums) === 36) {
  console.log("test 성공");
} else {
  console.log("test 실패");
}

const evenSum = (nums) => {
  let sum = 0;
  for (num of nums) {
    if (num % 2 == 0) sum += num;
  }
  return sum;
};

if (evenSum(nums) === 206) {
  console.log("test 성공");
} else {
  console.log("test 실패");
}

const countSum = (nums) => {
  let count = 0;
  for (num of nums) {
    if (num % 2 === 0) count++;
  }
  return count;
};
