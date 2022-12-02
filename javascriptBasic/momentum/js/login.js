const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

// 함수가 실행될 때 첫 번째 인자에 발생한 event에 대한 정보를 담아서 반환한다.
// 따라서, 인자(정보를 받을 공간)만 열어주면 정보는 자동으로 넘겨준다.
// 'event'로 입력하는 것이 관행이다.
// preventDefault 메서드를 사용하여 브라우저가 행하는 기본 동작을 수행하지 못하도록 막을 수 있다.

// localStorage는 작은 DB라고 생각할 수 있다.
// 이 경우, username을 기억할 수 있다.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CALSSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

// username을 기억하고 있는지 아닌지에 대한 가정문을 통하여,
// 각 경우에 따라 연동된 html의 class name을 추가, 제거하여
// 원하는 동작이 일어나도록 제어하도록 한다.
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}
