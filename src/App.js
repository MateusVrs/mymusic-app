import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/home/Navigation";
import AsideBar from "./components/home/AsideBar";
import Music from "./components/Music";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/search" exact component={() => <Search />} />
          <Route path="/music/:musicId" exact component={() => <Music />} />
        </Switch>
        <AsideBar />
      </Router>
    </div>
  );
}

export default App;
