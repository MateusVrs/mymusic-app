import React from "react";

const Header = ({ artistInfo }) => {

    return (
        <section className="music-header">
            <h1>{artistInfo[0].name}</h1>
        </section>
    );
}

export default Header;