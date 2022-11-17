import React from "react";
import "./ContextMenu.css";

function ContextMenu(props) {
    // console.log("============================");
    // console.log(props);
    const { x, y, colors, updateStatus } = props;

    // console.log("============================");

    return (
        <>
            <div
                className="contextMenu"
                style={{ position: "absolute", left: x, top: y }}
            >
                <ul>
                    {colors.map((color, index) => {
                        return (
                            <li
                                key={index}
                                style={{ backgroundColor: color.code }}
                                className="text-capitalize"
                                onClick={(color_id) => updateStatus(color.id)}
                            >
                                {color.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default ContextMenu;
