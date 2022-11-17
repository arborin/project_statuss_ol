import React from "react";
import GroupCardsComp from "./GroupCardsComp";

function GroupListComp({ groups }) {
    if (groups.length > 0) {
        return groups.map((group, index) => {
            return <GroupCardsComp group={group} index={index} key={index} />;
        });
    } else {
        return <h4>Add new group...</h4>;
    }
}

export default GroupListComp;
