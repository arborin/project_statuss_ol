import React from "react";

function DoneProcessComp({ createNewGroup, moveStep }) {
    return (
        <div>
            <div>
                <p className="card-text mt-4">
                    Click "Finish" button to create group!
                </p>

                <button
                    className="btn btn-outline-primary"
                    onClick={(value) => moveStep(-1)}
                >
                    Back
                </button>

                <button
                    className="btn btn-success"
                    style={{ marginLeft: "15px" }}
                    onClick={createNewGroup}
                >
                    Finish
                </button>
            </div>
        </div>
    );
}

export default DoneProcessComp;
