import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation = () => {
    var navHome = window.location.pathname === "/" ? "navHome" : "";
    var navSearch = window.location.pathname === "/search" ? "navSearch" : "";
    var navGenres = window.location.pathname === "/genres" ? "navGenres" : "";

    return (
        <aside className="aside-container navigation">
            <nav className="nav-items">
                <Link className={`nav-item ${navHome}`} to="/" ><span className="material-icons-outlined">home</span>Home</Link>
                <Link className={`nav-item ${navSearch}`} to="/search" ><span className="material-icons-outlined">search</span>Search</Link>
                <Link className={`nav-item ${navGenres}`} to="/genres" ><span className="material-icons-outlined">music_note</span>Genres</Link>
            </nav>
        </aside>
    );
}

export default withRouter(Navigation);
