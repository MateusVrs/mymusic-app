import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Music from "./components/Music";
import Home from "./components/Home";

const YT_API_KEY = process.env.REACT_APP_YTAPI_KEY;

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/music/:musicPath/artist/:artistPath" exact component={() => <Music API_KEY={YT_API_KEY} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
