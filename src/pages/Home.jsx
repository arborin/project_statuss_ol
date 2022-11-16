import React, { useState } from "react";
import { data } from "../data";
import "./Home.css";
import Welcome from "../components/Welcome";
function Home() {
    const [step, setStep] = useState(0);

    const createNewGroup = () => {
        setStep(1);
        console.log("HEHEHE");
    };

    return (
        <div className="center-content">
            <div
                className="card "
                style={{ marginTop: "50px", width: "40rem" }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">
                        {step !== 0 ? `${step}/5` : ""}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>

                    {step === 0 && <Welcome createNewGroup={createNewGroup} />}
                </div>
            </div>
        </div>
    );
}

export default Home;
