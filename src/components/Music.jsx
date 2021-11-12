import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMusic from "../spotify/getMusic";
import Header from "./music-components/music-card/Header";
import Content from "./music-components/music-card/Content";

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
            <main className="main-container" >
            </main>
        );
    } else {
        return (
            <main className="main-container" >
                <Header artistInfo={trackJSON.artists} musicInfo={trackJSON} />
                <Content spotifyMusicId={trackJSON.id} />
            </main>
        );
    }
}

export default Music;
