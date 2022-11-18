import React, { useState } from "react";
import GroupCardsComp from "./GroupCardsComp";

function GroupListComp({ groups }) {
    const [groupList, setGroupList] = useState(groups);

    console.log(groupList);

    const deleteGroup = (id) => {
        const newGroupList = groupList.filter((item, index) => index !== id);

        if (newGroupList.length === 0) {
            localStorage.removeItem("groups");
            console.log("HERE1");
        } else {
            localStorage.setItem("groups", JSON.stringify(newGroupList));
            console.log("HERE1");
        }

        setGroupList(newGroupList);
    };

    if (groupList.length > 0) {
        return groupList.map((group, index) => {
            return (
                <GroupCardsComp
                    group={group}
                    index={index}
                    deleteGroup={deleteGroup}
                    key={index}
                />
            );
        });
    } else {
        return <h4>Add new group...</h4>;
    }
}

export default GroupListComp;
