const para = document.querySelector("h1");

function updateName() {
  const name = prompt("Enter a new name");
  //   para.textContent = `Player 1: ${name}`;
  console.log(para);
}

para.addEventListener("click", updateName);
