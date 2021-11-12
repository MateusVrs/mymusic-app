import React from "react";
import NameHeader from "./NameHeader";

const SearchHeader = ({ setValue, action, limit }) => {
    var interval;

    async function handleOnChange(searchValue) {
        const returnedMusics = await action(searchValue, limit);
        if (returnedMusics !== null) {
            setValue(returnedMusics);
        }
    }

    async function userTyping(value) {
        clearTimeout(interval);
        interval = setTimeout(() => handleOnChange(value), 1800);
    }

    return (
        <section className="header-container">
            <NameHeader />
            <div className="search-item">
                <span className="material-icons search-icon">search</span>
                <input className="search" id="search" type="text" placeholder="Type to search..." maxLength="25" onChange={(e) => {
                    if (e.target.value.trim() !== "") {
                        userTyping(e.target.value.trim());
                    }
                }} />
            </div>
        </section>
    );
}

export default SearchHeader;
