import React from "react";
import { Link, withRouter } from "react-router-dom";

const TopMusicCard = ({ musicJSON }) => {
    return (
        <div className="topmusic-card-container">
            <div className="topmusic-card">
                <Link className="topmusic-card-link" to={`/music/${musicJSON.artistPath}`} >
                    <section className="topmusic-content">
                        <img src={`${musicJSON.albumImg}`} width="185px" />
                    </section>
                </Link>
                <section className="topmusic-info">
                    <h1>{musicJSON.musicName}</h1>
                    <h2>{musicJSON.artistName}</h2>
                </section>

            </div>
        </div>
    );
}

export default withRouter(TopMusicCard);
