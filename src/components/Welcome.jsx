import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

function Welcome({ startCreateNewGroup }) {
    return (
        <div>
            <FontAwesomeIcon
                icon={faUsersLine}
                style={{ marginTop: "20px", fontSize: "70px" }}
                className="text-muted"
            />
            <p className="card-text mt-5 mb-5">
                You can create new group and add new projects and students into
                it.
            </p>
            <button
                className="btn btn-success mb-4"
                onClick={startCreateNewGroup}
            >
                Create New Group
            </button>
        </div>
    );
}

export default Welcome;
