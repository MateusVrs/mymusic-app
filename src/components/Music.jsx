import React from "react";
import { useParams } from "react-router-dom";
import Content from "./music/Content";
import Footer from "./music/Footer";
import Header from "./music/Header";

function Music(props) {
    let { musicPath, artistPath } = useParams();

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${props.API_KEY}&type=channel&q=${artistPath}&maxResults=3`;

    fetch(url).then(response => response.json()).then(data => {
        data.items.map(item => console.log(item.snippet));
    });

    return (
        <div className="music-container" >
            <Header artistInfo={artistPath} />
            <Content musicInfo={musicPath} />
            <Footer musicInfo={musicPath} />
        </div>
    );
}

export default Music;
