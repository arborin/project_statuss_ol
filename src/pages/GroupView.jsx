import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StatusColorComp from "../components/groups/StatusColorComp";
import ContextMenu from "../components/contextMenu/ContextMenu";

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

    return (
        <div>
            <h4 className="mt-4 mb-4">
                {group.name}: {params.id}
            </h4>

            <div className="mb-5">
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
                                            {/* {student.id} - {project.id} -{" "}
                                            {color[0].code} - {color[0].name} */}
                                            <span className="text-capitalize">
                                                {color[0].name}
                                            </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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
        </div>
    );
}

export default GroupView;
