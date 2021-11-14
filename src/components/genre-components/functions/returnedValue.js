import { Fragment } from "react";
import SearchResult from "../../search-components/SearchResult";

function returnedValue(tracks) {
    if (tracks.items.length > 0) {
        return (
            <Fragment>
                <header className="genre-header">
                    <h2>{(tracks.genreId).toUpperCase()}</h2>
                </header>
                <SearchResult musicInfo={tracks} />
            </Fragment>
        );
    }
}

export default returnedValue;
