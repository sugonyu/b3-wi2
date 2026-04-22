// Array 예제
const arr = [1, 2, 3];
console.log("초기:", arr);

// push: 끝에 추가
arr.push(4);
console.log("push(4):", arr); // [1, 2, 3, 4]

// pop: 끝에서 제거
const popped = arr.pop();
console.log("pop():", popped, arr); // 4, [1, 2, 3]

// unshift: 앞에 추가
arr.unshift(0);
console.log("unshift(0):", arr); // [0, 1, 2, 3]

// shift: 앞에서 제거
const shifted = arr.shift();
console.log("shift():", shifted, arr); // 0, [1, 2, 3]

// indexOf: 인덱스 찾기
console.log("indexOf(2):", arr.indexOf(2)); // 1

// slice: 잘라서 새 배열
console.log("slice(0, 2):", arr.slice(0, 2)); // [1, 2]

// splice: 제거/삽입 (원본 변경)
const removed = arr.splice(1, 1, 99);
console.log("splice(1, 1, 99):", removed, arr); // [2], [1, 99, 3]

// concat: 합치기
console.log("concat:", arr.concat([7, 8])); // [1, 99, 3, 7, 8]

// reverse, sort
console.log("reverse:", [...arr].reverse());
console.log("sort:", [...arr].sort((a, b) => a - b));

// map, filter, reduce
const nums = [1, 2, 3, 4, 5];
console.log("map(x*2):", nums.map(x => x * 2));
console.log("filter(짝수):", nums.filter(x => x % 2 === 0));
console.log("reduce(합):", nums.reduce((a, b) => a + b, 0));


// 
let a  = () => {}
console.log(a)
