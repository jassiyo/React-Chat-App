import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>
      <div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Femal</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckBox;
