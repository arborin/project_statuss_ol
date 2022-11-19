import { useEffect, useState, useRef } from "react";
import "./Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function Popup(props) {
    const mainElement = useRef();

    const { openPopup, closePopup, saveComment, commentData } = props;
    // const [data, setCommentData] = useState(commentData);
    const [comment, setComment] = useState(commentData.comment);

    useEffect(() => {
        commentData.comment = comment;
    }, [comment, commentData]);

    useEffect(
        (setopenPopup) => {
            const handleClick = (e) => {
                // console.log(e.target);
                // console.log(mainElement.current);

                if (mainElement.current === e.target) {
                    // console.log("CLOSE");
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
                <div className="popup-inner">
                    <header className="mb-4">
                        <h6>
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="ml-3"
                            />

                            <span style={{ marginLeft: 10 }}>Add Comment</span>
                        </h6>
                    </header>

                    <div className="popup-content">
                        <div className="form-group">
                            {/* <label for="comment">Comment:</label> */}
                            <textarea
                                className="form-control"
                                rows="5"
                                id="comment"
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                                value={comment}
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-3">
                        <button
                            style={{ marginLeft: "10px" }}
                            className="btn btn-success btn-sm float-end"
                            onClick={() => {
                                saveComment(commentData);
                            }}
                        >
                            Save
                        </button>
                        <button
                            className="btn btn-secondary btn-sm  float-end"
                            onClick={() => {
                                closePopup(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Popup;
