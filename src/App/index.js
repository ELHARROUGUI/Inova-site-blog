import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "../screens/list";
import Detail from "../screens/detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
