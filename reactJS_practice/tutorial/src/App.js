import { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // useEffect: 무슨 일이 일어나든 코드가 단 한번만 실행되도록 하거나 어떤 조건에 코드가 실행되도록 조정할 수 있다.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
