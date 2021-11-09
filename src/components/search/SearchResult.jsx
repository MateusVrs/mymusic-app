import React from "react";
import ResultList from "./ResultList";

const SearchResult = ({ musicInfo }) => {
    return (
        <div className="search-music-result">
            <ResultList musicInfo={musicInfo.items} />
        </div>
    );
}

export default SearchResult;
