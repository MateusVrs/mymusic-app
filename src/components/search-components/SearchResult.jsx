import React, { Fragment } from "react";
import MusicList from "../music-components/MusicList";

const SearchResult = ({ musicInfo }) => {
    return (
        <Fragment>
            <MusicList MusicInfo={musicInfo.items} />
        </Fragment>
    );
}

export default SearchResult;
