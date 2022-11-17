import React from "react";

function StatusColorComp({ color, name }) {
    return (
        <div style={{ display: "inline-block", marginRight: "20px" }}>
            <span
                style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: color,
                    display: "inline-block",
                    marginRight: "10px",
                }}
            ></span>
            <span
                style={{ display: "inline-block" }}
                className="text-capitalize"
            >
                {name}
            </span>
        </div>
    );
}

export default StatusColorComp;
