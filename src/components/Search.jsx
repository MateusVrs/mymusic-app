import React, { useState } from "react";
import SearchResult from "./search-components/SearchResult";
import SearchHeader from "./header-components/SearchHeader";
import LoadingCircle from "./general-components/LoadingCircle";
import searchMusics from "../spotify/searchMusics";

const Search = () => {
    const [musics, setMusics] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    function generateSearchContent() {
        if (isTyping) {
            return <LoadingCircle />
        } else if (musics) {
            return <SearchResult musicInfo={musics} />;
        } else {
            return null;
        }
    }

    return (
        <main className="main-container">
            <SearchHeader setValue={setMusics} isTyping={setIsTyping} action={searchMusics} limit={8} />
            <section className="search-content">
                {generateSearchContent()}
            </section>
        </main>
    );
}

export default Search;