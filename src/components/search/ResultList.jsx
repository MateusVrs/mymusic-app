import React from "react";
import MusicCard from "../MusicCard";

const ResultList = ({ musicInfo }) => {
    return (
        <div className="search-music-list">
            {musicInfo.map((info, index) => {
                const musicId = info.id;
                const artistPath = info.artists[0].name.toLowerCase().replace(/[\])}[{(]/g, "").split(" ").join("-");
                const albumImg = info.album.images[0].url;
                const musicName = info.name;
                const artistName = info.artists[0].name;

                return <MusicCard key={index} musicPath={musicId} artistPath={artistPath} musicName={musicName} artistName={artistName} albumImg={albumImg} />
            })}
        </div>
    );
}

export default ResultList;
