import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import Athletes from "./screens/Athletes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/athletes" component={Athletes} />
      </Switch>
    </Router>
  );
}

export default App;
