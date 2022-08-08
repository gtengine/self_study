// React Router: 페이지를 전환할 때 사용한다.
// router는 URL을 보고있는 component이고 그에 따른 각 route(or page)를 보여준다.
// App.js는 영화를 보여주지 않고 router를 rendering 해야한다.

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {/*
      Switch component를 입력한 이유는 한 번에 하나의 Route만 rendering 하기 위해서이다.
      React Router에서는 원한다면 여러 개의 Route를 한번에 rendering할 수 있다.
      */}
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
