import React from "react";
import MusicCard from "../MusicCard";

const MusicList = ({ JsonInfo }) => {
    return (
        <div className="music-list-container">
            <h2>Top 20 Global Musics</h2>
            <div className="music-list">
                {JsonInfo.map((info, index) => {
                    const track = info.track;
                    const musicId = track.id;
                    const artistPath = track.artists[0].name.toLowerCase().replace(/[\])}[{(]/g, "").split(" ").join("-");
                    const albumImg = track.album.images[0].url;
                    const musicName = track.name;
                    const artistName = track.artists[0].name;

                    return <MusicCard key={index} musicPath={musicId} artistPath={artistPath} musicName={musicName} artistName={artistName} albumImg={albumImg} />
                })}
            </div>
        </div>
    );
}

export default MusicList;
