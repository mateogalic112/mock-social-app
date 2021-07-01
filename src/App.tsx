import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import Athletes from "./screens/Athletes";
import AthleteSingle from "./screens/Athlete";
import SearchPage from "./screens/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/athletes" component={Athletes} />
        <Route path="/athletes/:id" component={AthleteSingle} />
        <Route path="/search/:keyword" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
