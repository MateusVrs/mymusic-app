import React from "react";
import MusicList from "./music/MusicList";

const Home = (topMusicJSON) => {
    return (
        <div className="home-container">
            <section className="home-header">
                <h1>!MyMusic</h1>
                <div className="search-container">
                    <span className="material-icons search-icon">search</span>
                    <input className="search" type="text" placeholder="Type to search..." maxLength="25" />
                </div>
            </section>
            <section className="home-content">
                <MusicList JsonInfo={topMusicJSON.topMusicJSON} />
            </section>
        </div>
    );
}

export default Home;