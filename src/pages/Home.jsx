import React, { useState } from "react";
import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
function Home() {
    // const [groupName, setGroupName] = useState("");
    // const [progress, setProgress] = useState(20);
    // const [projects, setProjects] = useState([]);

    // const [colors, setColors] = useState([
    //     { id: 1, name: "default", code: "#000000" },
    //     { id: 2, name: "check", code: "#000000" },
    //     { id: 3, name: "improve", code: "#000000" },
    //     { id: 4, name: "done", code: "#000000" },
    // ]);

    // const [groupData, setGroupData] = useState({
    //     name: "",
    //     students: [],
    //     projects: [],
    //     colors: [],
    //     results: [],
    // });

    // const [studentName, setStudentName] = useState("");
    // const [projectName, setProjectName] = useState("");
    // const [students, setStudents] = useState([]);

    // const groupNameHandler = (e) => {
    //     console.log(e.target.value);
    //     setGroupName(e.target.value);
    // };

    // const addGroupName = () => {
    //     console.log("ADD");
    //     setProgress(40);
    // };

    // const changeColor = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     let newCodes = colors.map((color) => {
    //         if (color.name === name) {
    //             color.code = value;
    //         }
    //         return color;
    //     });
    //     console.log("++++++++++++++++++++++++++++++++++++++++++++");
    //     console.log(newCodes);
    //     console.log("++++++++++++++++++++++++++++++++++++++++++++");
    //     setColors(newCodes);
    //     console.log(name, "----", value);
    // };

    // console.log(data);

    // const addStudent = () => {
    //     console.log("ADD STUDENT");
    //     let id = 0;
    //     if (students.length > 0) {
    //         console.log(students.slice(-1));
    //         let lastItem = students.slice(-1)[0];
    //         id = lastItem.id + 1;
    //     }
    //     const student = { id: id, name: studentName };

    //     setStudents([...students, student]);
    //     setStudentName("");
    // };

    // const addProject = () => {
    //     console.log("ADD STUDENT");
    //     let id = 0;
    //     if (projects.length > 0) {
    //         console.log(projects.slice(-1));
    //         let lastItem = projects.slice(-1)[0];
    //         id = lastItem.id + 1;
    //     }
    //     const project = { id: id, name: projectName };

    //     setProjects([...projects, project]);
    //     setProjectName("");
    // };

    // const next = () => {
    //     setProgress(progress + 20);
    // };

    // const saveData = () => {
    //     console.log(groupName);
    //     console.log(projects);
    //     console.log(students);
    //     console.log(colors);

    //     // GENERATE RESULTS
    //     let results = [];

    //     students.forEach((student) => {
    //         let data = { student_id: student.id, color_id: 1, comment: "" };

    //         projects.forEach((project) => {
    //             results.push({ ...data, project_id: project.id });
    //         });
    //     });

    //     console.log("RESULTS");
    //     console.log(results);

    //     setGroupData({
    //         name: groupName,
    //         colors: colors,
    //         students: students,
    //         projects: projects,
    //         results: results,
    //     });
    // };

    // return (
    //     <div>
    //         <h3>HOME CEATE NEW GROUP</h3>
    //         <p>{progress} %</p>
    //         <div style={{ borderTop: "1px solid #dedede", marginBottom: 20 }}>
    //             <label htmlFor="group-name">Enter Group Name: </label>
    //             <input
    //                 type="text"
    //                 name="group-name"
    //                 value={groupName}
    //                 onChange={groupNameHandler}
    //             />
    //             <button onClick={addGroupName}>Add Group Name</button>
    //             <p>{groupName ? groupName : "No Group name"}</p>
    //         </div>

    //         <h3>ADD PROJECTS</h3>
    //         <div style={{ borderTop: "1px solid #dedede", marginBottom: 20 }}>
    //             <label htmlFor="group-name">Enter project Name: </label>
    //             <input
    //                 type="text"
    //                 name="project-name"
    //                 value={projectName}
    //                 onChange={(e) => {
    //                     setProjectName(e.target.value);
    //                 }}
    //             />
    //             <button onClick={addProject}>Add Project</button>
    //             {projects.map((project) => {
    //                 return (
    //                     <p key={project.id}>
    //                         {project.id} - {project.name}
    //                     </p>
    //                 );
    //             })}
    //         </div>
    //         <div style={{ borderTop: "1px solid #dedede", marginTop: 20 }}>
    //             <label htmlFor="student-name">Add Student: </label>
    //             <input
    //                 type="text"
    //                 name="student-name"
    //                 value={studentName}
    //                 onChange={(e) => {
    //                     setStudentName(e.target.value);
    //                 }}
    //             />
    //             <button onClick={addStudent}>Add Student</button>

    //             {students.map((student) => {
    //                 return (
    //                     <p key={student.id}>
    //                         {student.id} - {student.name}
    //                     </p>
    //                 );
    //             })}
    //         </div>
    //         <div style={{ borderTop: "1px solid #dedede", marginTop: 20 }}>
    //             {colors.map((color) => {
    //                 return (
    //                     <input
    //                         key={color.id}
    //                         type="color"
    //                         name={color.name}
    //                         value={color.code}
    //                         onChange={(e) => changeColor(e)}
    //                     />
    //                 );
    //             })}

    //             <button onClick={next}>Next</button>
    //         </div>
    //         <div>
    //             <button
    //                 onClick={saveData}
    //                 style={{
    //                     display: "block",
    //                     height: 30,
    //                     background: "#6bbae4",
    //                 }}
    //             >
    //                 DONE
    //             </button>
    //         </div>
    //         <div>
    //             <div>
    //                 <h2>
    //                     <strong>{groupData.name}</strong>
    //                 </h2>
    //                 <h4>Students</h4>
    //                 <ul key="student">
    //                     {groupData.students.map((student) => {
    //                         return <li key={student.id}>{student.name}</li>;
    //                     })}
    //                 </ul>
    //                 <h4>Colors</h4>
    //                 <ul key="colors">
    //                     {groupData.colors.map((color) => {
    //                         return (
    //                             <li key={color.id}>
    //                                 {color.name}-
    //                                 <span
    //                                     style={{
    //                                         display: "inline-block",
    //                                         width: "20px",
    //                                         height: "20px",
    //                                         backgroundColor: color.code,
    //                                     }}
    //                                 ></span>
    //                             </li>
    //                         );
    //                     })}
    //                 </ul>
    //                 <h4>Projects</h4>
    //                 <ul>
    //                     {groupData.projects.map((project) => {
    //                         return <li key={project.id}>{project.name}</li>;
    //                     })}
    //                 </ul>
    //                 <h4>PROJECT TABLE</h4>
    //                 <table border="1px" width="100%">
    //                     <thead>
    //                         <tr>
    //                             <td></td>
    //                             {students.map((student, index) => {
    //                                 return <td key={index}>{student.name}</td>;
    //                             })}
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {groupData.projects.map((project) => {
    //                             return (
    //                                 <tr key={project.id}>
    //                                     <td>{project.name}</td>
    //                                     {groupData.students.map(
    //                                         (student, index) => {
    //                                             let res =
    //                                                 groupData.results.filter(
    //                                                     (result) => {
    //                                                         return (
    //                                                             result.student_id ===
    //                                                                 student.id &&
    //                                                             result.project_id ===
    //                                                                 project.id
    //                                                         );
    //                                                     }
    //                                                 );
    //                                             console.log(
    //                                                 "======================================"
    //                                             );

    //                                             let color_id = res[0].color_id;

    //                                             let color = colors.filter(
    //                                                 (color) => {
    //                                                     return (
    //                                                         color.id ===
    //                                                         color_id
    //                                                     );
    //                                                 }
    //                                             );

    //                                             console.log(color[0].code);
    //                                             console.log(
    //                                                 "======================================"
    //                                             );

    //                                             return (
    //                                                 <td
    //                                                     key={index}
    //                                                     bgcolor={color[0].code}
    //                                                 >
    //                                                     {student.id} -{" "}
    //                                                     {project.id} -{" "}
    //                                                     {color[0].code}
    //                                                 </td>
    //                                             );
    //                                         }
    //                                     )}{" "}
    //                                 </tr>
    //                             );
    //                         })}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="center-content">
            <div
                className="card "
                style={{ marginTop: "50px", width: "40rem" }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">Step: 1/5</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>

                    {1 === 1 && <Welcome />}
                </div>
            </div>
        </div>
    );
}

export default Home;
