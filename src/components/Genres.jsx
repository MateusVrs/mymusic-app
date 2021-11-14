import React, { useState, useEffect } from "react";
import SearchHeader from "./header-components/SearchHeader";
import searchMusicByGenre from "../spotify/searchMusicByGenre";
import GenreList from "./genre-components/GenreList";
import LoadingCircle from "./general-components/LoadingCircle";
import initializeGenreSeeds from "./genre-components/functions/initializeGenreSeeds";
import returnedValue from "./genre-components/functions/returnedValue";

const Genres = () => {
    const [tracksByGenre, setTracksByGenre] = useState(null);
    const [genres, setGenres] = useState(null);
    const [randomGenres, setRadomGenres] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    function generateGenreContent() {
        if (isTyping) {
            return <LoadingCircle />;
        } else if (tracksByGenre && returnedValue(tracksByGenre)) {
            return returnedValue(tracksByGenre);
        } else if (randomGenres) {
            return <GenreList genres={randomGenres} isTyping={setIsTyping} setValue={setTracksByGenre} action={searchMusicByGenre} limit={8} />;
        } else {
            return <LoadingCircle />;
        }
    }

    useEffect(() => {
        initializeGenreSeeds(setGenres, setRadomGenres);
    }, []);

    return (
        <main className="main-container">
            <SearchHeader suggestOptions={genres} isTyping={setIsTyping} setValue={setTracksByGenre} action={searchMusicByGenre} limit={8} />
            <section className="genre-content">
                {generateGenreContent()}
            </section>
        </main>
    );
}

export default Genres;
