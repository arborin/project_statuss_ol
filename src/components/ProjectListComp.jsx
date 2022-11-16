import React from "react";

function ProjectListComp({ projects, deleteProject }) {
    return (
        <div className="mt-4 center-content">
            <ul className="list-group" style={{ width: "40rem" }}>
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="list-group-item">
                            {project.name}{" "}
                            <span className="float-end">
                                <button
                                    className="btn btn-link"
                                    onClick={(id) => {
                                        deleteProject(project.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectListComp;
