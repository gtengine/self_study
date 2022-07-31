// abstract class: 다른 클래스가 상속받을 수 있는 클래스지만, 직접 인스턴스를 만들 수 없다.
// private property: 외부에서 접근할 수 없다. property가 외부에서 사용되기를 원한다면, 사용해서는 안된다.
// public proverty : 외부에서 접근이 가능하다.
// protected property: 외부에서는 접근할 수 없지만 자식 클래스에서 접근할 수 있다.
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  // abstract method: 메소드를 클래스 안에서 구현하는 것이 아니라, 메소드의 call signature만 정의하면 된다.
  // 이 경우, 추상 클래스를 상속받는 클래스에서 추상 메소드를 구현해야한다.
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PersonA extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const allen = new PersonA("allen", "worker", "알렌");
allen.getFullName();

/////
// Words 타입이 key와 value 모두 string만을 property로 가지는 object라는 것을 정의.
type Words = {
  [key: string]: string;
};

// public property에 readonly 속성을 추가하면 조회는 가능하지만 수정은 할 수 없도록 막을 수 있다.
class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

// class를 type처럼 사용할 수 있다.
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

const kimchi = new Word("kimchi", "한국의 전통 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
