import React, { useState } from "react";
import MainHeader from "../MainHeader";
import SearchResult from "./search/SearchResult";
import searchMusic from "../spotify/searchMusic";

const Search = () => {
    const [musics, setMusics] = useState(null);

    async function handleOnChange(searchValue) {
        const returnedMusics = await searchMusic(searchValue, 10);
        if (returnedMusics !== null) {
            setMusics(returnedMusics);
        }
    }

    function userTyping(value) {
        clearTimeout(interval);
        var interval = setTimeout(() => handleOnChange(value), 1200);
    }

    return (
        <div className="search-container">
            <div className="search-header">
                <MainHeader />
                <div className="search-item">
                    <span className="material-icons search-icon">search</span>
                    <input className="search" id="search" type="text" placeholder="Type to search..." maxLength="25" onChange={(e) => {
                        if (e.target.value.trim() !== "") {
                            userTyping(e.target.value.trim());
                        }
                    }} />
                </div>
            </div>
            <div className="search-content-container">
                {musics ? <SearchResult musicInfo={musics} /> : null}
            </div>
        </div>
    );
}

export default Search;