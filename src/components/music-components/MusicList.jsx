import React, { Fragment } from "react";
import MusicCard from "./music-card/MusicCard";

const MusicList = ({ JsonInfo, MusicInfo }) => {
    const handleInfo = JsonInfo ? JsonInfo.map(info => info.track) : MusicInfo;
    return (
        <Fragment>
            <div className="music-list">
                {handleInfo.map((info, index) => {
                    const musicId = info.id;
                    const artistPath = info.artists[0].name.toLowerCase().replace(/[\])}[{(]/g, "").split(" ").join("-");
                    const albumImg = info.album.images[0].url;
                    const musicName = info.name;
                    const artistName = info.artists[0].name;

                    return <MusicCard key={index} musicPath={musicId} artistPath={artistPath} musicName={musicName} artistName={artistName} albumImg={albumImg} />
                })}
            </div>
        </Fragment>
    );
}

export default MusicList;
