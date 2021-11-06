import React from "react";

const Content = ({ musicInfo }) => {
    return (
        <section className="music-content">
            <iframe title={musicInfo.name} src={`https://open.spotify.com/embed/track/${musicInfo.id}?theme=0`} width="85%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </section>
    );
}

export default Content;