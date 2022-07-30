type NickName = string;
type Health = number;
type Friends = Array<string>;

type Member = {
  nickname: NickName;
  healthBar: Health;
};

const ma: Member = {
  nickname: "allen",
  healthBar: 50,
};

type Food = string;
const gogi: Food = "delicious";

type Team = "black" | "white" | "red" | "blue";
type HealthParameter = 10 | 50 | 100;

// object의 shape을 특정하기 위한 방법으로 type과 interface 두 가지 방법이 있다.
// 차이점은 type이 interface에 비해 좀 더 활용 범위가 넓다는 것이다.
// interface는 오로지 object의 shape을 설명하기 위해 사용되는 키워드이다.
interface athlete {
  nickname: string;
  team: Team;
  healthbar: HealthParameter;
}

const mb: athlete = {
  nickname: "allen",
  team: "black",
  healthbar: 100,
};

interface UserA {
  name: string;
}

interface MemberA extends UserA {}
const mc: MemberA = {
  name: "allen",
};

// 같은 이름의 interface를 여러 개 만들 경우, 알아서 하나로 합쳐준다.
// 이는 type으로는 할 수 없다.
interface UserB {
  name: string;
}
interface UserB {
  age: number;
}
interface UserB {
  bool: boolean;
}
const md: UserB = {
  name: "allen",
  age: 30,
  bool: false,
};

// javascript에는 abstract의 개념이 없다.
abstract class UserC {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
class PlayerA extends UserC {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// interface는 javascript에 complie 되지 않는다.
// interface에는 constructor가 없다.
interface UserD {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface UserE {
  health: number;
}
// implements: javascript에는 사용하지 않는 개념이다.
// interface를 상속할 때에는 property를 private로 만들 수 없다. public이 되어야만 한다.
// 다수의 interface를 상속할 수 있다.
class PlayerB implements UserD, UserE {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// interface를 type으로 사용할 수 있다.
function makeUserA(user: UserD) {
  return "hi";
}
makeUserA({
  firstName: "allen",
  lastName: "wolker",
  fullName: () => "xx",
  sayHi: (name) => "",
});

function makeUserB(user: UserD): UserD {
  return {
    firstName: "allen",
    lastName: "wolker",
    fullName: () => "xx",
    sayHi: (name) => "",
  };
}
