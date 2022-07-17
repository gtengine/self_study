1.

console.log("hello world"); // html의 console에 log를 보냄

// const : 변수를 생성할 때 사용. 변수의 값을 변경할 수 없음.
// let : 변수를 생성할 때 사용. 변수의 값을 변경할 수 있음.
// var : 변수를 생성할 때 사용. 지금은 사용되지 않음. const 와 let 처럼 규칙이 없기 때문에 문제가 발생할 수 있다.
const a = 10;
const b = 2;
let myName = 'allen';

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

myName = 'gyeongtae';

console.log('Your new name is ' + myName);

2.
// boolean
const amIFat = true;
console.log(amIFat);

const amIThin = false;
console.log(amIFat);

// null : 아무것도 정의되지 않음.
const myWeights = null;
console.log(myWeights);

// undefind : 변수는 존재하지만 값이 없음.
let something;
console.log(something, myWeights);

3.
const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';
const dayOfWeek1 = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, 'hello', false, null, true, undefined];
console.log(dayOfWeek1, nonsense);

const dayOfWeek2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(dayOfWeek2);
console.log(dayOfWeek2[5]); // sat
console.log(dayOfWeek2);

dayOfWeek2.push('sun')
console.log(dayOfWeek2)

