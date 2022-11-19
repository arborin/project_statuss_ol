import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StatusColorComp from "../components/groups/StatusColorComp";
import ContextMenu from "../components/contextMenu/ContextMenu";
import Popup from "../components/popup/PopupComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMessage,
    faEnvelope,
    faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

function GroupView() {
    const params = useParams();
    const groupIndex = params.id;
    let groups = JSON.parse(localStorage.getItem("groups"));

    const [group, setGroup] = useState(groups[groupIndex]);
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        student_id: "",
        project_id: "",
    });
    const { students, projects, results, colors } = group;
    const [openPopup, setOpenPopup] = useState(false);
    const [commentData, setCommentData] = useState({});

    const contextMenu = (e, student_id, project_id) => {
        console.log(student_id, "=", project_id);

        e.preventDefault();
        setShowMenu(true);
        setPosition({
            x: e.clientX,
            y: e.clientY,
            student_id: student_id,
            project_id: project_id,
        });
        // console.log(position.x);
        // console.log(position.y);
        // console.log("TEXT: " + text);
    };

    const closeContextMenu = () => {
        setShowMenu(false);
    };

    const updateStatus = (color_id) => {
        let new_results = group.results.map((result) => {
            if (
                result.student_id === position.student_id &&
                result.project_id === position.project_id
            ) {
                result.color_id = color_id;
            }
            return result;
        });

        setGroup({ ...group, results: new_results });

        updateLocalStorage(new_results);
    };

    const updateLocalStorage = (results) => {
        groups[groupIndex].results = results;

        localStorage.setItem("groups", JSON.stringify(groups));
    };

    useEffect(() => {
        window.addEventListener("click", closeContextMenu);

        return function cleanup() {
            window.removeEventListener("click", closeContextMenu);
        };
    }, []);

    const openCommentPopup = (student_id, project_id) => {
        console.log("STUDENT ID: " + student_id);
        console.log("PROJECT ID: " + project_id);
        console.log("GROUP ID: " + groupIndex);

        let result = groups[groupIndex].results.filter(
            (result) =>
                result.student_id === student_id &&
                result.project_id === project_id
        );

        console.log(result);

        setCommentData({
            student_id: student_id,
            project_id: project_id,
            groupIndex: groupIndex,
            comment: result[0].comment,
        });

        setOpenPopup(true);
    };

    const closePopup = () => {
        setOpenPopup(false);
    };

    const saveComment = (data) => {
        console.log(">>> SAVE DATA ");
        // console.log(data);
        const { student_id, project_id, groupIndex, comment } = data;

        // update group results
        const groupNewResult = group.results.map((result) => {
            if (
                result.student_id === student_id &&
                result.project_id === project_id
            ) {
                result.comment = comment;
            }

            return result;
        });

        setGroup({ ...group, results: groupNewResult });

        // WRITE TO LOCALSTORAGE

        groups[groupIndex].results = groupNewResult;

        localStorage.setItem("groups", JSON.stringify(groups));

        closePopup();
    };

    return (
        <div className="container">
            <h5 className="mt-4 mb-4">
                <Link to="/groups">
                    <FontAwesomeIcon
                        icon={faAngleDoubleLeft}
                        style={{
                            marginTop: "20px",
                            marginRight: "10px",
                            fontSize: "16px",
                        }}
                        className="text-primary"
                    />
                </Link>
                Group:
                <span className="text-muted">{` ${group.name}`}</span>
            </h5>
            <div
                className="mb-5"
                style={{
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    borderBottom: "1px solid #ddd",
                    borderTop: "1px solid #ddd",
                }}
            >
                {colors.map((color, index) => {
                    return (
                        <StatusColorComp
                            color={color.code}
                            name={color.name}
                            key={index}
                        />
                    );
                })}
            </div>
            <h5 className="text-muted mb-4">Projects and students</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>#</td>
                        {students.map((student, index) => {
                            return (
                                <td key={index}>
                                    <span className="text-capitalize">
                                        {student.name}
                                    </span>
                                </td>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => {
                        return (
                            <tr key={project.id}>
                                <td>{project.name}</td>
                                {students.map((student, index) => {
                                    let res = results.filter((result) => {
                                        return (
                                            result.student_id === student.id &&
                                            result.project_id === project.id
                                        );
                                    });

                                    let color_id = res[0].color_id;

                                    let color = colors.filter((color) => {
                                        return color.id === color_id;
                                    });

                                    return (
                                        <td
                                            onContextMenu={(event) =>
                                                contextMenu(
                                                    event,
                                                    student.id,
                                                    project.id
                                                )
                                            }
                                            key={index}
                                            style={{
                                                backgroundColor: color[0].code,
                                            }}
                                        >
                                            <span className="text-capitalize">
                                                {color[0].name}
                                            </span>
                                            <span className="float-end">
                                                <FontAwesomeIcon
                                                    icon={
                                                        res[0].comment
                                                            ? faEnvelope
                                                            : faMessage
                                                    }
                                                    onClick={(
                                                        event,
                                                        student_id,
                                                        project_id
                                                    ) => {
                                                        openCommentPopup(
                                                            student.id,
                                                            project.id
                                                        );
                                                    }}
                                                />
                                            </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* CONTEXT MENU SECTION */}
            {showMenu && (
                <ContextMenu
                    x={position.x}
                    y={position.y}
                    colors={group.colors}
                    updateStatus={(color_id) => {
                        updateStatus(color_id);
                    }}
                />
            )}
            {/* POPUP SECTION */}
            {openPopup && (
                <Popup
                    openPopup={openPopup}
                    closePopup={closePopup}
                    saveComment={saveComment}
                    commentData={commentData}
                >
                    <h3>My Popup</h3>
                </Popup>
            )}
        </div>
    );
}

export default GroupView;
