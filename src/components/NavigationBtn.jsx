import React from "react";

function NavigationBtn({ moveStep }) {
    return (
        <div>
            <div>
                <button
                    className="btn btn-outline-primary"
                    onClick={(value) => {
                        moveStep(-1);
                    }}
                >
                    Prev
                </button>
                <button
                    className="btn btn-outline-primary"
                    style={{ marginLeft: "15px" }}
                    onClick={(value) => {
                        moveStep(1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default NavigationBtn;
