import React from "react";
import { Link, withRouter } from "react-router-dom";

const MusicCard = ({ musicPath, musicName, artistName, albumImg }) => {
    return (
        <div className="music-card-container">
            <div className="music-card">
                <Link className="play-icon" to={`/music/${musicPath}`} >
                    <span className="material-icons">play_circle_filled</span>
                </Link>
                <Link className="music-card-link" to={`/music/${musicPath}`} >
                    <section className="music-content">
                        <img alt={`'${musicName}' music album`} src={`${albumImg}`} />
                    </section>
                </Link>
                <section className="music-info">
                    <h1>{musicName}</h1>
                    <h2>{artistName}</h2>
                </section>
            </div>
        </div>
    );
}

export default withRouter(MusicCard);
