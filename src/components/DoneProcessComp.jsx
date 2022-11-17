import React from "react";

function DoneProcessComp({ createNewGroup }) {
    return (
        <div>
            <div>
                <p className="card-text mt-4">
                    Click "Finish" button to create group!
                </p>
                <button className="btn btn-success" onClick={createNewGroup}>
                    Finish
                </button>
            </div>
        </div>
    );
}

export default DoneProcessComp;
