import React, { useState } from "react";
import MainHeader from "../MainHeader";
import SearchResult from "./search/SearchResult";
import searchMusic from "../spotify/searchMusic";

const Search = () => {
    const [musics, setMusics] = useState(null);
    var interval;

    async function handleOnChange(searchValue) {
        console.log("search");
        const returnedMusics = await searchMusic(searchValue, 10);
        if (returnedMusics !== null) {
            setMusics(returnedMusics);
        }
    }

    async function userTyping(value) {
        clearTimeout(interval);
        interval = setTimeout(() => handleOnChange(value), 1800);
    }

    return (
        <main className="search-container">
            <header className="search-header">
                <MainHeader />
                <div className="search-item">
                    <span className="material-icons search-icon">search</span>
                    <input className="search" id="search" type="text" placeholder="Type to search..." maxLength="25" onChange={(e) => {
                        if (e.target.value.trim() !== "") {
                            userTyping(e.target.value.trim());
                        }
                    }} />
                </div>
            </header>
            <section className="search-content-container">
                {musics ? <SearchResult musicInfo={musics} /> : null}
            </section>
        </main>
    );
}

export default Search;