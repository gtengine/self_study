// conditional

const age = parseInt(prompt("How old are you?")); //parseInt: string을 number로 변경.
console.log(typeof age); // typeof: 데이터 타입을 확인.

// 조건은 boolean으로 입력해야한다.
// 조건이 true 이면 if 문이 실행된다.
// 조건이 false 이면 else if 문이 실행된다.
// else if 문이 false 이면 else 문이 실행된다.
if (isNaN(age) || age < 0) {
  // &&: and 연산자, ||: or 연산자
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age === 100) {
  // 조건을 적는 순서를 잘 생각해야 한다.
  // ===: 같음을 비교
  // !==: 다름을 비교
  console.log("Wow you are wise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
