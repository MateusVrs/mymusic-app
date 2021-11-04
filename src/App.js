import React from "react";
import getTopMusics from "./spotify/getTopMusics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MusicList from "./components/music/MusicList";
import Home from "./components/Home";
import Music from "./components/Music";

const YT_API_KEY = process.env.REACT_APP_YTAPI_KEY;
getTopMusics(25);

const App = () => {
  const topMusicsJSON = JSON.parse(localStorage.getItem("topMusics"));

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home topMusicJSON={topMusicsJSON} />} />
          {topMusicsJSON.map((music) =>
            <Route key={music.artistPath} path={`/music/${music.artistPath}`} exact component={() => <Music JsonInfo={music} API_KEY={YT_API_KEY} />} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
