import React from "react";

const Header = ({ artistInfo }) => {
    return (
        <section className="music-header">
            <h1>{artistInfo.artistName}</h1>
        </section>
    );
}

export default Header;