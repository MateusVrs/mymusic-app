import React, { useState } from "react";
import SearchResult from "./search-components/SearchResult";
import SearchHeader from "./header-components/SearchHeader";
import searchMusics from "../spotify/searchMusics";

const Search = () => {
    const [musics, setMusics] = useState(null);

    return (
        <main className="main-container">
            <SearchHeader setValue={setMusics} action={searchMusics} limit={10} />
            <section className="search-content">
                {musics ? <SearchResult musicInfo={musics} /> : null}
            </section>
        </main>
    );
}

export default Search;