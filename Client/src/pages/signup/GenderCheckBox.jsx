import React from "react";

const GenderCheckBox = ({onCheckBoxChange, selectGender}) => {
  return (
    <div className="flex">
      <div>
        <div className="form-control">
				<label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""} `}>
            <span className="label-text">Male</span>
            <input type="checkbox" defaultChecked className="checkbox" 
              checked={selectGender==="male"}
              onChange={()=>{onCheckBoxChange("male")}}
            />
          </label>
        </div>
      </div>
      <div>
        <div className="form-control">
				<label className={`label gap-2 cursor-pointer  ${selectGender === "female" ? "selected" : ""}`}>
            <span className="label-text">Female</span>
            <input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectGender === "female"}
						onChange={() => onCheckBoxChange("female")}
					/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckBox;
