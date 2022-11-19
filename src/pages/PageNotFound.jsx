import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="center-content container">
            <div
                className="card "
                style={{ marginTop: "50px", width: "40rem" }}
            >
                <div className="card-body text-center">
                    <div className="text-center mt-1">
                        <FontAwesomeIcon
                            icon={faGhost}
                            style={{ marginTop: "20px", fontSize: "70px" }}
                            className="text-muted"
                        />
                        <p className="card-text mt-5 mb-5">Page not found!</p>
                        <Link to="/" className="btn btn-primary mb-4">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
