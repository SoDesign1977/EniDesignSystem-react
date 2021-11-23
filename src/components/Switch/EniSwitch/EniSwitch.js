import React from "react";
import PropTypes from 'prop-types';

import { generateKey } from "../../../js/helpers";

export default function EniSwitch({
  title,
  disabled = false,
  required = false,
  checked= false,
  name="",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSwitch"));
  const [value, setvalue] = React.useState(checked);

  React.useEffect(()=>{
    if(value!=checked)
    setvalue(checked)
  },[checked])
  return (
    <>
      <div className="eni-group-switch"  role="radiogroup">
        <div
          className={`eni-switch ${required ? "required" : ""} ${
            disabled ? "disabled" : ""
          }`}
        >
          <input
            onClick={()=> setvalue(!value)}
            {...props}
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={value}
            disabled={disabled}
            aria-required={required}
            required={required}
          />
          <span className="eni-slider round"></span>
        </div>
        <label
          className={`eni-switch-value eni-switch-label ${
            required ? "required" : ""
          } ${disabled ? "disabled" : ""}`}
          htmlFor={id}
        >
          {title}
        </label>
      </div>
    </>
  );
}

EniSwitch.propTypes = {
  title: PropTypes.string,
  disabled:PropTypes.bool,
  checked:PropTypes.bool,
  required:PropTypes.bool,
  name:PropTypes.string,
  };
  