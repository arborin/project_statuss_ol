import React from "react";

function ColorSelectComp({ colors, changeColorCode }) {
    return (
        <div>
            <h5 className="mb-4 mt-4">Select project status colors</h5>

            <div className="row mb-3">
                <form>
                    {colors.map((color, index) => {
                        return (
                            <div className="row mb-3 justify-content-center align-items-center">
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-sm-2 col-form-label col-form-label-sm text-capitalize"
                                >
                                    {color.name}
                                </label>
                                <div className="col-sm-3">
                                    <input
                                        type="color"
                                        value={color.code}
                                        className="form-control form-control-sm"
                                        id="colFormLabelSm"
                                        name={color.name}
                                        placeholder="col-form-label-sm"
                                        onChange={changeColorCode}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
}

export default ColorSelectComp;
