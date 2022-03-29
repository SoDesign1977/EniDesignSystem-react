import React from "react";
import PropTypes from "prop-types";
import { generateKey } from "../../../js/helpers";

export default function EniTabsCheckbox({
  title = "",
  disabled = false,
  checked = false,
  icon = "",
  name = "",
  ...props
}) {
  const [value, setvalue] = React.useState(checked);
 const x = generateKey("eni-checkbox-tabs")
  return (
    <>
     <input
        className="eni-checkbox-tabs-input"
        type="checkbox"
        name={name}
        checked={value}
        value={title}
        disabled={disabled}
        {...props}
      ></input>
        <button
          className={`eni-checkbox-tabs ${disabled ? "disabled" : ""} ${
            value ? "checked" : ""
          }`}
          disabled={disabled}
          aria-checked={value}
          role="checkbox"
          aria-labelledby={x}
          key={x}
          onClick={()=>{
            setvalue(!value);
          }}
        >
          <div className="eni-checkbox-tabs-img">
            <img src={`${icon}`} alt={`Icon`} />
          </div>
          <div className="eni-checkbox-tabs-message">
            <label id={x}>{title}</label>
          </div>
        </button>
  
 
    </>
  );
}
EniTabsCheckbox.propTypes = {
  icon:PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
