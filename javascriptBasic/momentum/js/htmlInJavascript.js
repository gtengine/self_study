// getElements... 은 array로 반환.

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title1 = document.getElementsByTagName("h1");
console.log(title1);

// querySelector: element를 css방식으로 검색, 같은 element가 여러 개 있을 경우, 첫 번째만 반환
// #: css selector가 id로 인식
// .: css selector가 class로 인식
const title2 = document.querySelector("#hello"); // 두 코드는 같은 결과를 반환
const title3 = document.getElementById("hello");
console.log(title2);
console.log(title3);
// querySelectorAll: 같은 element를 모두 반환
const titles = document.querySelectorAll("#hello h1");
console.log(titles);
