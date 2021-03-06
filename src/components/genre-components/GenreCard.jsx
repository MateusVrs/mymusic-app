import React from "react";
import userTyping from "../header-components/functions/userTyping";

const GenreCard = ({ genreName, setValue, action, limit, isTyping }) => {
    function handleSearch() {
        const inputElement = document.getElementById('search');
        inputElement.value = `${genreName}`;
        userTyping(setValue, action, genreName, limit, isTyping);
    }

    return (
        <div className="genre-card-container">
            <button className="genre-btn" onClick={() => handleSearch()}>
                <div className={`genre-card ${genreName}`} >
                    <header className="genre-header">
                        <h2>{genreName}</h2>
                    </header>
                    <span className="material-icons-outlined">play_circle_filled</span>
                </div>
            </button>
        </div>
    );
}

export default GenreCard;
