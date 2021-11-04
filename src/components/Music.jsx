import React from "react";
import Content from "./music/Content";
import Footer from "./music/Footer";
import Header from "./music/Header";

const Music = ({ JsonInfo, API_KEY }) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=channel&q=${JsonInfo.artistPath}&maxResults=3`;

    fetch(url).then(response => response.json()).then(data => {
        data.items.map(item => console.log(item.snippet));
    });

    return (
        <div className="music-container">
            <Header artistInfo={JsonInfo} />
            <Content musicInfo={JsonInfo} />
            <Footer musicInfo={JsonInfo} />
        </div>
    );
}

export default Music;