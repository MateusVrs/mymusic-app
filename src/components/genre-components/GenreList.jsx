import React, { Fragment } from "react";
import GenreCard from "./GenreCard";

const GenreList = ({ genres, setValue, action, limit, isTyping }) => {
    const seeds = genres.seeds;
    const images = genres.images;

    return (
        <Fragment>
            <div className="genre-list">
                {seeds.map((genre, index) => <GenreCard key={index} genreName={genre} genrePhoto={images[index]} isTyping={isTyping} setValue={setValue} action={action} limit={limit} />)}
            </div>
        </Fragment>
    );
}

export default GenreList;