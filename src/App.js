import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/general-components/Navigation";
import AsideBar from "./components/general-components/AsideBar";
import Music from "./components/Music";
import Home from "./components/Home";
import Search from "./components/Search";
import Genres from "./components/Genres";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/search" exact component={() => <Search />} />
          <Route path="/genres" exact component={() => <Genres />} />
          <Route path="/music/:musicId" exact component={() => <Music />} />
        </Switch>
        <AsideBar />
      </Router>
    </Fragment>
  );
}

export default App;
