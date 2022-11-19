import { useEffect, useRef } from "react";

function ConfirmAlert(props) {
    const mainElement = useRef();
    const { openPopup, closePopup, confirmDeleteAction, confirmData } = props;
    useEffect(
        (setopenPopup) => {
            const handleClick = (e) => {
                if (mainElement.current === e.target) {
                    closePopup(false);
                }
            };
            document.addEventListener("click", handleClick);
            return function cleanUp() {
                document.removeEventListener("click", handleClick);
            };
        },
        [closePopup]
    );
    return (
        openPopup && (
            <div className="popup" ref={mainElement}>
                <div className="confirm-inner">
                    <header className="mb-4">
                        <h5>Are you sure?</h5>
                    </header>
                    <div className="popup-content">
                        <button
                            style={{ marginLeft: "10px" }}
                            className="btn btn-success btn-sm float-end"
                            onClick={() => {
                                confirmDeleteAction(confirmData.id);
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className="btn btn-secondary btn-sm  float-end"
                            onClick={() => {
                                closePopup(false);
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        )
    );
    // return <h1>111</h1>;
}

export default ConfirmAlert;
