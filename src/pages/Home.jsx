import React, { useState } from "react";
// import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
import GroupComp from "../components/GroupComp";
import NavigationBtn from "../components/NavigationBtn";
import RecordListComp from "../components/RecordListComp";
import InputComp from "../components/InputComp";
import ColorSelectComp from "../components/ColorSelectComp";
import DoneProcessComp from "../components/DoneProcessComp";
import { useNavigate } from "react-router-dom";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

function Home() {
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [groupName, setGroupName] = useState("");

    const [projectName, setProjectName] = useState("");
    const [projects, setProjects] = useState([]);

    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);

    const color_data = [
        { id: 1, name: "default", code: "#ff4f4f" },
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

    const addProject = (e) => {
        e.preventDefault();
        if (projectName.trim() === "") {
            NotificationManager.warning("Please enter name", "Warning", 3000);
            return;
        }

        let id = 0;
        if (projects.length > 0) {
            console.log(projects.slice(-1));
            let lastItem = projects.slice(-1)[0];
            id = lastItem.id + 1;
        }
        const project = { id: id, name: projectName };
        setProjects([...projects, project]);
        setProjectName("");
    };

    const deleteProject = (id) => {
        const newProjects = projects.filter((project) => {
            return project.id !== id;
        });
        setProjects(newProjects);
    };

    const addStudent = (e) => {
        e.preventDefault();
        if (studentName.trim() === "") {
            NotificationManager.warning("Please enter name", "Warning", 3000);
            return;
        }

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

    const startCreateNewGroup = () => {
        setStep(1);

        console.log("HEHEHE");
    };

    const createNewGroup = () => {
        let results = [];

        students.forEach((student) => {
            let data = { student_id: student.id, color_id: 1, comment: "" };

            projects.forEach((project) => {
                results.push({ ...data, project_id: project.id });
            });
        });
        // create new group record
        const data = {
            name: groupName,
            students: students,
            colors: colors,
            projects: projects,
            results: results,
        };

        console.log(data);
        let groups = localStorage.getItem("groups");
        if (groups !== null) {
            groups = JSON.parse(groups);
            groups.push(data);
        } else {
            groups = [];
            groups.push(data);
        }

        localStorage.setItem("groups", JSON.stringify(groups));

        navigate(`/groups`);
    };

    const moveStep = (value) => {
        if (step + value > 5) {
            value = 0;
        }

        if (value > 0) {
            // NEXT BUTTON
            if (groupName.trim() === "" && step === 1) {
                NotificationManager.warning(
                    "Please fill group name",
                    "Warning!",
                    3000
                );
                return;
            }

            if (projects.length === 0 && step === 2) {
                NotificationManager.warning(
                    "Please add project",
                    "Warning!",
                    3000
                );
                return;
            }

            if (students.length === 0 && step === 3) {
                NotificationManager.warning(
                    "Please add students",
                    "Warning!",
                    3000
                );
                return;
            }

            setStep(step + value);
        } else {
            // PERV BUTTON
            setStep(step + value);
        }
    };

    return (
        <div className="center-content container">
            <NotificationContainer />
            <div
                className="card "
                style={{ marginTop: "50px", width: "40rem" }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">
                        {step !== 0 ? `Step: ${step}/5` : ""}
                    </h5>

                    {step === 0 && (
                        <Welcome startCreateNewGroup={startCreateNewGroup} />
                    )}
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

                    {step === 5 && (
                        <DoneProcessComp createNewGroup={createNewGroup} />
                    )}

                    {step > 0 && step < 5 && (
                        <NavigationBtn moveStep={moveStep} />
                    )}
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
