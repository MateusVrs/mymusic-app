import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getMusic from "../spotify/getMusic";
import Header from "./music/Header";
import Content from "./music/Content";
import { useState } from "react/cjs/react.development";

function Music() {
    const { musicPath, artistPath } = useParams();
    const [trackJSON, setTrackJSON] = useState(null);

    useEffect(() => {
        async function updateTrackJSON() {
            const returnedMusic = await getMusic(musicPath, artistPath);
            if (returnedMusic !== null) {
                setTrackJSON(returnedMusic);
            }
        }

        updateTrackJSON();
    }, [musicPath, artistPath]);

    if (trackJSON == null) {
        return (
            <div className="music-container" >
            </div>
        );
    } else {
        return (
            <div className="music-container" >
                <Header artistInfo={trackJSON.artists} musicInfo={trackJSON} />
                <Content spotifyMusicId={trackJSON.id} />
            </div>
        );
    }
}

export default Music;
