import React from "react";
import { Link } from "react-router-dom";

function GroupCardsComp({ group, index }) {
    // console.log(name);
    return (
        <div className="col-4">
            <div className="card mt-4" style={{ width: "400px" }}>
                <div className="card-body">
                    <h4 className="card-title">{group.name}</h4>
                    <p className="card-text">
                        Projects: {group.projects.length}, Students:{" "}
                        {group.students.length}
                    </p>
                    <Link
                        to={`/group/${index}`}
                        className="btn btn-sm btn-primary"
                    >
                        Open
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GroupCardsComp;
