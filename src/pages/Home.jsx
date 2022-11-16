import React, { useState } from "react";
import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
import GroupComp from "../components/GroupComp";
import NavigationBtn from "../components/NavigationBtn";
import ProjectComp from "../components/ProjectComp";
import ProjectListComp from "../components/ProjectListComp";
function Home() {
    const [step, setStep] = useState(0);
    const [groupName, setGroupName] = useState("");

    const [projectName, setProjectName] = useState("");
    const [projects, setProjects] = useState([]);

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
                        <ProjectComp
                            projectName={projectName}
                            setProjectName={setProjectName}
                            addProject={addProject}
                        />
                    )}

                    {step !== 0 && <NavigationBtn moveStep={moveStep} />}
                </div>
            </div>

            {step === 2 && (
                <ProjectListComp
                    projects={projects}
                    deleteProject={deleteProject}
                />
            )}
        </div>
    );
}

export default Home;
