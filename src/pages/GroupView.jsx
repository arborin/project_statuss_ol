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
    const [position, setPosition] = useState({ x: 0, y: 0, text: "" });
    const { students, projects, results, colors } = group;

    const contextMenu = (e, text) => {
        e.preventDefault();
        setShowMenu(true);
        setPosition({ x: e.clientX, y: e.clientY, text: text });
        // console.log(position.x);
        // console.log(position.y);
        // console.log("TEXT: " + text);
    };

    const closeContextMenu = () => {
        setShowMenu(false);
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

            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        {students.map((student, index) => {
                            return <td key={index}>{student.name}</td>;
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
                                    console.log(
                                        "======================================"
                                    );

                                    let color_id = res[0].color_id;

                                    let color = colors.filter((color) => {
                                        return color.id === color_id;
                                    });

                                    console.log(color[0].code);
                                    console.log(
                                        "======================================"
                                    );

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
                                            {student.id} - {project.id} -{" "}
                                            {color[0].code} - {color[0].name}
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
                    data={{
                        // del: deleteMenu,
                        // edit: editMenu,
                        x: position.x,
                        y: position.y,
                        colors: group.colors,
                    }}
                />
            )}
        </div>
    );
}

export default GroupView;
