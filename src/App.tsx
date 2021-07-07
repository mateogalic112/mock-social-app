import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./screens/Feed";
import Athletes from "./screens/Athletes";
import AthleteSingle from "./screens/Athlete";
import SearchPage from "./screens/SearchPage";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/athletes" component={Athletes} />
        <Route path="/athletes/:id(\d+)" component={AthleteSingle} />
        <Route path="/search" component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
