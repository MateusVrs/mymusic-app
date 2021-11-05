import React from "react";
import getTopMusics from "../spotify/getTopMusics"
import MusicList from "./home/MusicList";

const Home = () => {

    getTopMusics(20);
    const topMusicsJSON = JSON.parse(localStorage.getItem("topMusics"));

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
                <MusicList JsonInfo={topMusicsJSON} />
            </section>
        </div>
    );
}

export default Home;