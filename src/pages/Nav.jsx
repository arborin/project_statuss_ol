import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            <FontAwesomeIcon
                                icon={faHome}
                                style={{ marginRight: "5px" }}
                                className="text-primary"
                            />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/groups" className="nav-link">
                            Groups
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
