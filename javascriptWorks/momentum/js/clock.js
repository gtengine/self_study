const clock = document.querySelector("h2#clock");

// new Date: Date object를 반환하며, 호출하는 당시의 시간 정보를 가져올 수 있다.
// number type을 string type으로 변환하는 것은 String() 함수에 인자로 입력하면 된다.
// padStart : string을 원하는 길이로 만들며, 부족한 부분은 두 번째 인자로 넣어준 문자로 채운다.
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();

// setInterval: 실시간으로 함수를 실행하는 함수이며, 두 번째 인자로 입력한 시간마다(ms) 함수를 재실행한다.
// setTimeout: 두 번째 인자로 입력한 시간(ms)의 대기가 끝나면 함수를 실행한다.
setInterval(getClock, 1000);
// setTimeout(getClock, 1000);
