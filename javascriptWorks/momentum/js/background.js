const images = ["b0.png", "b1.png", "b2.png", "b3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement: 코드를 통해 html에 새로운 element를 생성할 수 있다.
const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

// 코드상에서만 존재하는 element를 html에 출력하기 위해 document.body에 추가한다.
// append는 뒤에 추가, prepend는 앞에 추가한다.
document.body.appendChild(bgImage);
