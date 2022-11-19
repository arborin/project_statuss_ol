import React, { useState } from "react";
import GroupCardsComp from "./GroupCardsComp";
import ConfirmAlert from "../popup/ConfirmAlert";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

function GroupListComp({ groups }) {
    const navigate = useNavigate();

    const [groupList, setGroupList] = useState(groups);
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    const deleteGroup = (id) => {
        const newGroupList = groupList.filter((item, index) => index !== id);
        console.log(id);
        if (newGroupList.length === 0) {
            localStorage.removeItem("groups");
            console.log("HERE1");
        } else {
            localStorage.setItem("groups", JSON.stringify(newGroupList));
            console.log("HERE1");
        }

        setGroupList(newGroupList);
        closeDeleteConfirm();
        NotificationManager.success(
            "Operation completed successfully!",
            "Success!",
            3000
        );
    };

    const openDeleteConfirm = () => {
        setDeleteConfirm(true);
    };

    const closeDeleteConfirm = () => {
        setDeleteConfirm(false);
    };

    if (groupList.length > 0) {
        return groupList.map((group, index) => {
            return (
                <div className="col-4" key={index}>
                    <GroupCardsComp
                        group={group}
                        index={index}
                        deleteGroup={deleteGroup}
                        deleteConfirm={openDeleteConfirm}
                        openPopup={true}
                    />

                    {deleteConfirm && (
                        <ConfirmAlert
                            openPopup={openDeleteConfirm}
                            closePopup={closeDeleteConfirm}
                            confirmDeleteAction={deleteGroup}
                            confirmData={{ id: index }}
                        />
                    )}
                </div>
            );
        });
    } else {
        return navigate("/");
    }
}

export default GroupListComp;
