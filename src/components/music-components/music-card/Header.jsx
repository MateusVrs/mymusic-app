import React from "react";

const Header = ({ artistInfo, musicInfo }) => {

    return (
        <header className="music-header">
            <h1>{artistInfo[0].name}</h1>
            <h2>{musicInfo.name}</h2>
        </header>
    );
}

export default Header;