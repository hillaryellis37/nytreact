import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navpills from "./components/navpills";


const App = () =>
  <Router>

    <div>
      	<Navpills />
      	<Switch>
        	<Route exact path="/" component={Search} />
        	<Route exact path="/saved" component={Saved} />
      	</Switch>
    </div>
  </Router>;

export default App;
