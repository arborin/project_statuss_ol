import React, { useState } from "react";
import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
import GroupComp from "../components/GroupComp";
import NavigationBtn from "../components/NavigationBtn";
function Home() {
    const [step, setStep] = useState(0);

    const createNewGroup = () => {
        setStep(1);
        console.log("HEHEHE");
    };

    const moveStep = (value) => {
        if (step + value > 5) {
            value = 0;
        }
        setStep(step + value);
    };

    return (
        <div className="center-content">
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
                        <GroupComp createNewGroup={createNewGroup} />
                    )}

                    {step !== 0 && <NavigationBtn moveStep={moveStep} />}
                </div>
            </div>
        </div>
    );
}

export default Home;
