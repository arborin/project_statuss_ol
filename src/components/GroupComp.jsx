import React from "react";

function GroupComp({ groupName, setGroupName }) {
    return (
        <div>
            <div>
                <h5 className="mb-4 mt-4">Enter Group name</h5>
                <p className="card-text">
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="group-name"
                        value={groupName}
                        onChange={(e) => {
                            setGroupName(e.target.value);
                        }}
                    />
                </p>
            </div>
        </div>
    );
}

export default GroupComp;
