import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMusic from "../spotify/getMusic";
import Header from "./music/Header";
import Content from "./music/Content";

function Music() {
    const { musicId } = useParams();
    const [trackJSON, setTrackJSON] = useState(null);

    useEffect(() => {
        async function updateTrackJSON() {
            const returnedMusic = await getMusic(musicId);
            if (returnedMusic !== null) {
                setTrackJSON(returnedMusic);
            }
        }

        updateTrackJSON();
    }, [musicId]);

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
