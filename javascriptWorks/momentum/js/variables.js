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