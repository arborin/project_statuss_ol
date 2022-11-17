import React, { useState } from "react";
import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
import GroupComp from "../components/GroupComp";
import NavigationBtn from "../components/NavigationBtn";
import RecordListComp from "../components/RecordListComp";
import InputComp from "../components/InputComp";
import ColorSelectComp from "../components/ColorSelectComp";

function Home() {
    const [step, setStep] = useState(0);
    const [groupName, setGroupName] = useState("");

    const [projectName, setProjectName] = useState("");
    const [projects, setProjects] = useState([]);

    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);

    const color_data = [
        { id: 1, name: "default", code: "#dedede" },
        { id: 2, name: "check", code: "#f1c40f" },
        { id: 3, name: "improve", code: "#3498db" },
        { id: 4, name: "done", code: "#27ae60" },
    ];

    const [colors, setColors] = useState(color_data);

    const changeColorCode = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedColors = colors.map((color) => {
            if (color.name === name) {
                color.code = value;
            }
            return color;
        });

        setColors(updatedColors);
    };

    const addProject = () => {
        if (projectName.trim() !== "") {
            let id = 0;
            if (projects.length > 0) {
                console.log(projects.slice(-1));
                let lastItem = projects.slice(-1)[0];
                id = lastItem.id + 1;
            }
            const project = { id: id, name: projectName };
            setProjects([...projects, project]);
            setProjectName("");
        }
    };

    const deleteProject = (id) => {
        const newProjects = projects.filter((project) => {
            return project.id !== id;
        });
        setProjects(newProjects);
    };

    const addStudent = () => {
        console.log("ADD STUDENT");
        let id = 0;
        if (students.length > 0) {
            console.log(students.slice(-1));
            let lastItem = students.slice(-1)[0];
            id = lastItem.id + 1;
        }
        const student = { id: id, name: studentName };

        setStudents([...students, student]);
        setStudentName("");
    };

    const deleteStudent = (id) => {
        console.log("DELETE " + id);
        const newStudents = students.filter((student) => {
            return student.id !== id;
        });
        setStudents(newStudents);
    };

    const createNewGroup = () => {
        setStep(1);
        console.log("HEHEHE");
    };

    const moveStep = (value) => {
        if (step + value > 5) {
            value = 0;
        }
        if (groupName.trim() !== "") {
            setStep(step + value);
        }
    };

    return (
        <div className="center-content container">
            <div
                className="card "
                style={{ marginTop: "50px", width: "40rem" }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">
                        {step !== 0 ? `Step: ${step}/5` : ""}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>

                    {step === 0 && <Welcome createNewGroup={createNewGroup} />}
                    {step === 1 && (
                        <GroupComp
                            groupName={groupName}
                            setGroupName={setGroupName}
                        />
                    )}
                    {step === 2 && (
                        <InputComp
                            title="project"
                            value={projectName}
                            setValue={setProjectName}
                            addNew={addProject}
                        />
                    )}

                    {step === 3 && (
                        <InputComp
                            title="student"
                            value={studentName}
                            setValue={setStudentName}
                            addNew={addStudent}
                        />
                    )}

                    {step === 4 && (
                        <ColorSelectComp
                            colors={colors}
                            changeColorCode={changeColorCode}
                        />
                    )}

                    {step !== 0 && <NavigationBtn moveStep={moveStep} />}
                </div>
            </div>

            {step === 2 && (
                <RecordListComp items={projects} deleteItem={deleteProject} />
            )}
            {step === 3 && (
                <RecordListComp items={students} deleteItem={deleteStudent} />
            )}
        </div>
    );
}

export default Home;
