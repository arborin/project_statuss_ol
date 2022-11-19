import React from "react";

function InputComp({ value, setValue, addNew, title }) {
    return (
        <div>
            <div>
                <h5 className="mb-4 mt-4">Add {title}</h5>
                <form>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                            id="button-addon2"
                            onClick={addNew}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InputComp;
