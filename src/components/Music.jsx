import React from "react";
import { useParams } from "react-router-dom";
import getMusic from "../spotify/getMusic";
import Header from "./music/Header";
import Content from "./music/Content";
import Footer from "./music/Footer";

function Music(props) {
    let { musicPath, artistPath } = useParams();
    const searchMusic = getMusic(musicPath, artistPath);
    console.log(searchMusic);

    return (
        <div className="music-container" >
            <Header artistInfo={searchMusic.artists} />
            <Content musicInfo={searchMusic} />
            <Footer musicInfo={searchMusic} />
        </div>
    );
}

export default Music;

/*
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${props.API_KEY}&type=channel&q=${artistPath}&maxResults=3`;

    fetch(url).then(response => response.json()).then(data => {
        data.items.map(item => console.log(item.snippet));
    });
*/
