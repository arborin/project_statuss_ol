import React from "react";
import { NavLink } from "react-router-dom";
import GroupListComp from "../components/groups/GroupListComp";

function Groups() {
    let groups = localStorage.getItem("groups");
    if (groups === null) {
        return (
            <div className="text-center mt-1">
                <h5 className="mt-5">Groups not found!</h5>
                <NavLink to="/" className="btn btn-primary mt-5">
                    Home
                </NavLink>
            </div>
        );
    }
    groups = JSON.parse(groups);

    return (
        <div className="row mt-3">
            <GroupListComp groups={groups} />
        </div>
    );
}

export default Groups;
