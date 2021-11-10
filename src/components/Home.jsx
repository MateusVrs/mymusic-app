import React, { useEffect, useState } from "react";
import getTopMusics from "../spotify/getTopMusics";
import MusicList from "./home/MusicList";
import MainHeader from "../MainHeader";

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

    if (topMusicsJSON == null) {
        return (
            <main className="home-container">
            </main>
        );
    } else {
        return (
            <main className="home-container">
                <MainHeader />
                <section className="home-content">
                    <MusicList JsonInfo={topMusicsJSON} />
                </section>
            </main>
        );
    }
}

export default Home;
