// call signature: 함수를 정의하면서 선언하는 type들을 따로 분리하여 정의한다.
// 프로그램을 디자인하면서 타입들을 먼저 고려한 뒤에 알고리즘을 구현한다.
function add1(a: number, b: number) {
  return a + b;
}
const add2 = (a: number, b: number) => a + b;

type Adda = (a: number, b: number) => number;
const add3: Adda = (a, b) => a + b;

// overloading: 함수가 여러 개의 call signature를 가지고 있을 때 발생
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// call signature의 파라미터 개수가 다를 수 있다.
type Addc = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add5: Addc = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
add5(1, 2);
add5(1, 2, 3);

// polymorphism
// generic: 입력받는 parameter의 type을 특정할 수 없을 때 사용한다.
// typescript는 입력받은 인자의 type을 유추하여 call signature를 반환한다.
type SuperPrint1 = {
  <TypePlaceHolder>(arr: TypePlaceHolder[]): void;
};
const superPrint1: SuperPrint1 = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint1([1, 2, 3, 4, 5]);
superPrint1([false, true, true, false]);
superPrint1(["a", "b", "c", "d"]);
superPrint1([1, 2, true, "a"]);

type SuperPrint2 = {
  <TypePlaceHold>(arr: TypePlaceHold[]): TypePlaceHold;
};
const superPrint2: SuperPrint2 = (arr) => arr[0];
const ax = superPrint2([1, 2, 3, 4, 5]);
const bx = superPrint2([false, true, true, false]);
const cx = superPrint2(["a", "b", "c", "d"]);
const dx = superPrint2([1, 2, true, "a"]);

// generic이 하나 이상인 경우
// generic의 순서에 따라 파라미터의 type을 추론한다.
type SuperPrint3 = <T, M>(a: T[], b: M) => T;
const superPrint3: SuperPrint3 = (a) => a[0];
const ay = superPrint3([1, 2, 3, 4, 5], "x");
const by = superPrint3([false, true, true, false], 1);
const cy = superPrint3(["a", "b", "c", "d"], true);
const dy = superPrint3([1, 2, true, "a"], [1, 2]);

function superPrint4<V>(a: V[]) {
  return a[0];
}
const az = superPrint2([1, 2, 3, 4, 5]);
const bz = superPrint2([false, true, true, false]);
const cz = superPrint2(["a", "b", "c", "d"]);
const dz = superPrint2([1, 2, true, "a"]);

// parameter의 type을 확장할 때에도 generic을 사용할 수 있다.
// type을 생성하고 그 type을 또 다른 type에 입력하여 사용할 수 있다.
type Visitor<E> = {
  name: string;
  extraInfo: E;
};
type GtExtra = {
  favFood: string;
};
type VisitorGt = Visitor<GtExtra>;
const gt: VisitorGt = {
  name: "gyeongtae",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Visitor<null> = {
  name: "lynn",
  extraInfo: null,
};
