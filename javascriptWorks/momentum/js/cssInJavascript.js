// style 작업을 할 때는 css를 변경하는 것이 바람직하다.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  // className은 기존의 class에 상관없이 모든 것을 바꿔버린다.
  // classList를 사용하여 기존의 class에 추가하거나 삭제할 수 있다.
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

function handleTitleClick() {
  // toggle: classList에 입력값이 있는지 확인하여 존재하면 지우고, 존재하지 않으면 추가한다.
  h1.classList.toggle("clicked");
}
// 위의 두 함수는 완전히 같은 동작을 한다.
h1.addEventListener("click", handleTitleClick);
