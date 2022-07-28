// typescript에서 변수를 정의할 때, 콜론(:)과 data type을 선언하는 방법이 있다.
let a: number[] = [1];
let b: string = "li";
let c: boolean = true;
let d = [1, 2];

// 그냥 typescript가 변수의 type을 추론하여 다른 type 입력시 에러를 발생한다.
const player1 = {
  name: "gyeongtae",
};
player1.name = "min";

// object type은 변수의 type을 object라고 정의하지 않고, 속성의 type을 정의해준다.
// object의 속성을 필수가 아닌 선택적으로 만들기 위해서는, 속성의 type을 정의할 때 속성 이름 뒤에 물음표(?)를 붙여준다.
const player2: {
  name: string;
  age?: number;
} = {
  name: "gyeongtae",
};

// Alias: 같은 속성을 가지는 object를 여러 개 생성하는 경우 속성의 type을 중복해서 선언할 필요가 없도록,
// object에 적용할 type을 생성하여 각 object를 생성할 때 적용시킨다.
// 또한 전에 생성한 type을 새로 생성하는 type에 적용할 수 있다.
type Age = number;
type Player = {
  readonly name: string;
  age?: Age;
};

const playerA: Player = {
  name: "Gyeongtae",
};
const playerB: Player = {
  name: "Nanyoung",
  age: 28,
};

// function을 생성할 때에도 사전에 생성해 놓은 type을 적용하여 return 값의 type을 지정할 수 있다.
function userMaker(name: string): Player {
  return { name };
}
const userA = userMaker("aaa");
userA.age = 22;

// 화살표를 사용한 function을 만들 때의 type 지정.
const userCreater = (name: string): Player => ({ name });
const userB = userCreater("bbb");
userB.age = 25;

// readonly: 읽기 전용으로 만들어 수정할 수 없도록 한다.
const numbers: readonly number[] = [5, 6, 7, 8];
// numbers.push(1) : Error

// Tuple: array를 정의할 때, 특정 위치에 특정 type을 지정할 수 있다.
// 수정을 할 때에도 그 자리에 맞는 type에 맞게 수정해야 한다.
const arr: [string, number, boolean] = ["gt", 1, true];
arr[0] = "ny";

// undefined
// null
// any: typescript로부터 빠져나오고 싶을 때 사용하는 type.
// typescript의 보호장치가 작동하지 않기 때문에 사용할 때는 신중하게!
const z: any[] = [1, 2, 3, 4];
const y: any = true;
z + y; // Error가 발생하지 않음

// unknown: 외부 api 등에서 받아오는 데이터의 type을 알 수 없을 때 사용한다.
// 이 특성을 가진 변수를 사용해 작업을 하기 위해서는 변수의 type을 먼저 확인해야 한다.
let x: unknown;

let w = x + 1; // error
if (typeof x === "number") {
  let w = x + 1; // no error
}

let v = x.toUpperCase(); // error
if (typeof x === "string") {
  let v = x.toUpperCase(); // no error
}

// void: 아무것도 return 하지 않는 함수의 type이다.
// type 지정이 가능하지만, 굳이 따로 지정해 줄 필요가 없다.
function hello() {
  console.log("hello");
}

// never: 함수가 절대 return하지 않을 때 발생한다.
// 예를 들면, 함수에서 예외처리 또는 절대 실행되면 안되는 코드일 때 never 특성을 가진다.

function hi1(): never {
  return "X"; // error
}

function hi2(): never {
  throw new Error("XXX"); // no error
}

function hi3(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name; // 이 때, type이 never이다.
  }
}
