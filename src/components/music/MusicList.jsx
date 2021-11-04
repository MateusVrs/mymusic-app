import React from "react";
import TopMusicCard from "./TopMusicCard";

const MusicList = ({ JsonInfo }) => {
    return (
        <div className="music-list-container">
            <h1>Top 25 Global Musics</h1>
            <div className="music-list">
                {JsonInfo.map((info, index) =>
                    <TopMusicCard key={index} musicJSON={info} />
                )}
            </div>
        </div>
    );
}

export default MusicList;
