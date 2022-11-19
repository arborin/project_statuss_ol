import React from "react";
import { NavLink } from "react-router-dom";
import GroupListComp from "../components/groups/GroupListComp";
import { NotificationContainer } from "react-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFaceFrownOpen,
    faFaceMehBlank,
} from "@fortawesome/free-solid-svg-icons";

function Groups() {
    let groups = localStorage.getItem("groups");
    if (groups === null) {
        return (
            <div className="center-content container">
                <div
                    className="card "
                    style={{ marginTop: "50px", width: "40rem" }}
                >
                    <div className="card-body text-center">
                        <div className="text-center mt-1">
                            <FontAwesomeIcon
                                icon={faFaceFrownOpen}
                                style={{ marginTop: "20px", fontSize: "70px" }}
                                className="text-muted"
                            />
                            <p className="card-text mt-5 mb-5">
                                Groups not found!
                            </p>
                            <NavLink to="/" className="btn btn-primary mb-4">
                                Home
                            </NavLink>
                        </div>
                    </div>
                </div>
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
