import React from "react";
import "./ContextMenu.css";

function ContextMenu(props) {
    // console.log("============================");
    // console.log(props);
    const x = props.data.x;
    const y = props.data.y;
    const text = props.data.text;
    // console.log("============================");

    return (
        <>
            <div
                className="contextMenu"
                style={{ position: "absolute", left: x, top: y }}
            >
                <ul>
                    <li key={text}>{text}</li>
                    <li key={"edit"} onClick={props.data.edit}>
                        Edit
                    </li>
                    <li key={"delete"} onClick={props.data.del}>
                        Delete
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ContextMenu;
