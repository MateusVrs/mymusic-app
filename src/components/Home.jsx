import React, { useEffect, useState } from "react";
import getTopMusics from "../spotify/getTopMusics";
import MusicList from "./music-components/MusicList";
import NameHeader from "./header-components/NameHeader";
import LoadingCircle from "./general-components/LoadingCircle";

const Home = () => {
    const [topMusicsJSON, setTopMusicsJSON] = useState(null);

    useEffect(() => {
        async function updateTopMusicsJSON() {
            const returnedTopMusics = await getTopMusics(20);
            if (returnedTopMusics !== null) {
                setTopMusicsJSON(returnedTopMusics);
            }
        }

        updateTopMusicsJSON();
    }, []);

    if (topMusicsJSON === null) {
        return (
            <main className="main-container">
                <LoadingCircle />
            </main>
        );
    } else {
        return (
            <main className="main-container">
                <NameHeader />
                <section className="home-content">
                    <h2>Top 20 Global Musics</h2>
                    <MusicList JsonInfo={topMusicsJSON} />
                </section>
            </main>
        );
    }
}

export default Home;
