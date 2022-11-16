import React from "react";

function ProjectComp({ projectName, setProjectName, addProject }) {
    return (
        <div>
            <div>
                <h5 className="mb-4 mt-4">Add Project Name</h5>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter name"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={projectName}
                        onChange={(e) => {
                            setProjectName(e.target.value);
                        }}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        id="button-addon2"
                        onClick={addProject}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectComp;
