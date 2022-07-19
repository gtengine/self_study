const h1 = document.querySelector("div.hello:first-child h1");
console.log(h1);
console.dir(h1); // element의 내부를 확인할 때 사용

// dir에서 'on'으로 시작되는 항목들은 event 이다.
// addEventListener: event를 감지한다. event와 function을 인자로 입력하면, event가 일어났을 때 function을 수행한다.
// function을 인자로 입력할 때에는 function의 이름만 입력한다. ()는 입력하지 않는다.
function handleTitleClick() {
  console.log("h1 was clicked!");
  h1.innerText = "Hello!";
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "orange";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI...");
}

function handleWindowOnline() {
  alert("ALL GOOOOD");
}

h1.addEventListener("click", handleTitleClick); // 두 코드는 같은 동작이다.
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
// style 작업을 할 때는 css를 변경하는 것이 바람직하다.
