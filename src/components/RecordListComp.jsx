import React from "react";

function RecordListComp({ items, deleteItem }) {
    return (
        <div className="mt-4 center-content">
            <ul className="list-group" style={{ width: "40rem" }}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className="list-group-item">
                            {item.name}{" "}
                            <span className="float-end">
                                <button
                                    className="btn btn-link"
                                    onClick={(id) => {
                                        deleteItem(item.id);
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

export default RecordListComp;
