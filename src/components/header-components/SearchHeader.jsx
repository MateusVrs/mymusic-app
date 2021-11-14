import React from "react";
import NameHeader from "./NameHeader";
import userTyping from "./functions/userTyping";

const SearchHeader = ({ setValue, isTyping, suggestOptions, action, limit }) => {
    return (
        <section className="header-container">
            <NameHeader />
            <div className="search-item">
                <span className="material-icons search-icon">search</span>
                <input list="suggest-list" className="search" id="search" type="text" placeholder="Type to search..." maxLength="25" onChange={(e) => {
                    if (e.target.value.trim() !== "") {
                        userTyping(setValue, action, e.target.value.trim(), limit, isTyping);
                    }
                }} />
                <datalist id="suggest-list">
                    {suggestOptions ? suggestOptions.map(suggest => <option key={suggest} value={suggest} />) : null}
                </datalist>
            </div>
        </section>
    );
}

export default SearchHeader;
