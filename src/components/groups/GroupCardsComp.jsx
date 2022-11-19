import React from "react";
import { Link, useNavigate } from "react-router-dom";

function GroupCardsComp({ group, index, deleteGroup, deleteConfirm }) {
    // console.log(name);
    const navigate = useNavigate();

    const viewGroup = (index) => {
        console.log(index);

        navigate(`/group/${index}`);
    };
    return (
        <div className="card mt-4" style={{ width: "400px" }}>
            <div className="card-body">
                <h4 className="card-title text-primary">
                    <span
                        onClick={() => viewGroup(index)}
                        style={{ cusror: "pointer" }}
                    >
                        {group.name}
                    </span>
                </h4>
                <p className="card-text">
                    Projects: {group.projects.length}, Students:{" "}
                    {group.students.length}
                </p>
                <Link
                    to={`/group/${index}`}
                    className="btn btn-sm btn-primary float-end"
                >
                    Open
                </Link>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={(id) => {
                        // deleteGroup(index);
                        deleteConfirm(index);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default GroupCardsComp;
