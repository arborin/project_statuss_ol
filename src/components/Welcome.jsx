import React from "react";

function Welcome({ createNewGroup }) {
    return (
        <div>
            <p className="card-text">
                You can create new group and add new projects and students into
                it.
            </p>
            <button className="btn btn-success" onClick={createNewGroup}>
                Create New Group
            </button>
        </div>
    );
}

export default Welcome;
