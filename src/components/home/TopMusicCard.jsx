import React from "react";
import { Link, withRouter } from "react-router-dom";

const TopMusicCard = ({ musicJSON }) => {
    return (
        <div className="topmusic-card-container">
            <div className="topmusic-card">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="play-icon">
                    <span className="material-icons">play_circle_filled</span>
                </a>
                <Link className="topmusic-card-link" to={`/music/${musicJSON.musicPath}/artist/${musicJSON.artistPath}`} >
                    <section className="topmusic-content">
                        <img alt={`'${musicJSON.musicName}' music album`} src={`${musicJSON.albumImg}`} />
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
