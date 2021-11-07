import React from "react";

const Content = ({ spotifyMusicId }) => {
    return (
        <section className="music-content">
            <iframe title={spotifyMusicId} src={`https://open.spotify.com/embed/track/${spotifyMusicId}?theme=0`} width="85%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>
    );
}

export default Content;