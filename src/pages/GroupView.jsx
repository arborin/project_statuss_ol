import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StatusColorComp from "../components/groups/StatusColorComp";

function GroupView() {
    const params = useParams();

    const groupIndex = params.id;

    let groups = JSON.parse(localStorage.getItem("groups"));
    // let group = groups[groupIndex];

    const [group, setGroup] = useState(groups[groupIndex]);
    console.log(group);

    const { students, projects, results, colors } = group;

    return (
        <div>
            <h4 className="mt-4 mb-4">
                {group.name}: {params.id}
            </h4>

            <div>
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
                                            key={index}
                                            style={{
                                                backgroundColor: color[0].code,
                                            }}
                                        >
                                            {student.id} - {project.id} -{" "}
                                            {color[0].code}
                                        </td>
                                    );
                                })}{" "}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GroupView;
