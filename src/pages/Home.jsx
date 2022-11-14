import React, { useState } from "react";
import { data } from "../data";

function Home() {
    const [groupName, setGroupName] = useState("");
    const [progress, setProgress] = useState(20);
    const [projects, setData] = useState(data);

    const groupNameHandler = (e) => {
        console.log(e.target.value);
        setGroupName(e.target.value);
    };

    const addGroupName = () => {
        console.log("ADD");
        setProgress(40);
    };

    console.log(data);

    return (
        <div>
            <h3>HOME CEATE NEW GROUP</h3>
            <p>{progress} %</p>
            <div>
                <label htmlFor="group-name">Enter Group Name: </label>
                <input
                    type="text"
                    name="group-name"
                    value={groupName}
                    onChange={groupNameHandler}
                />
                <button onClick={addGroupName}>Add Group Name</button>
            </div>
            <div>
                {projects.map((group, index) => {
                    return (
                        <div key={index}>
                            <h2>
                                <strong>{group.name}</strong>
                            </h2>
                            <h4>Students</h4>
                            <ul key="student">
                                {group.students.map((student) => {
                                    return (
                                        <li key={student.id}>{student.name}</li>
                                    );
                                })}
                            </ul>
                            <h4>Colors</h4>
                            <ul key="colors">
                                {group.colors.map((color) => {
                                    return (
                                        <li key={color.id}>
                                            {color.name}-
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    width: "20px",
                                                    height: "20px",
                                                    backgroundColor: color.code,
                                                }}
                                            ></span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <h4>Projects</h4>
                            <ul>
                                {group.projects.map((project) => {
                                    return (
                                        <li key={project.id}>{project.name}</li>
                                    );
                                })}
                            </ul>
                            <h4>PROJECT TABLE</h4>
                            <table border="1px" width="100%">
                                <thead>
                                    <tr>
                                        <td></td>
                                        {group.students.map(
                                            (student, index) => {
                                                return (
                                                    <td key={index}>
                                                        {student.name}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.projects.map((project) => {
                                        return (
                                            <tr key={project.id}>
                                                <td>{project.name}</td>

                                                {group.students.map(
                                                    (student, index) => {
                                                        let res =
                                                            group.results.filter(
                                                                (result) => {
                                                                    return (
                                                                        result.student_id ==
                                                                            student.id &&
                                                                        result.project_id ==
                                                                            project.id
                                                                    );
                                                                }
                                                            );
                                                        console.log(
                                                            "======================================"
                                                        );

                                                        let color_id =
                                                            res[0].color_id;

                                                        let color_code =
                                                            group.colors.filter(
                                                                (color) => {
                                                                    return (color.id =
                                                                        color_id);
                                                                }
                                                            );

                                                        console.log(color_code);
                                                        console.log(
                                                            "======================================"
                                                        );

                                                        return (
                                                            <td key={index}>
                                                                {student.id} -{" "}
                                                                {project.id} -{" "}
                                                            </td>
                                                        );
                                                    }
                                                )}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
