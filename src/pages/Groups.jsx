import React, { useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";
import GroupListComp from "../components/groups/GroupListComp";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

function Groups() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state);
        if (location.state === "new") {
            // location.state = null;
            NotificationManager.success("New group created", "Success!", 3000);
        }
    }, [location]);

    let groups = localStorage.getItem("groups");
    if (groups === null) {
        return (
            <div className="text-center mt-1">
                <NotificationContainer />
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
            <NotificationContainer />

            <GroupListComp groups={groups} />
        </div>
    );
}

export default Groups;
