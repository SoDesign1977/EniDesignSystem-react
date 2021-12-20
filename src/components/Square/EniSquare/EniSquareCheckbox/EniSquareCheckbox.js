import React from "react";
import PropTypes from 'prop-types';

import { generateKey } from "../../../../js/helpers";

export default function EniSquareCheckbox({
  title = "",
  icon = "",
  disabled = false,
  checked = false,
  required = false,
  name="",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSquareCheckboxError"));
  const [value, setvalue] = React.useState(checked);

  return (
    <>
      <div
        className={`eni-square eni-square-box ${
          disabled ? "disabled" : ""
        }`}
      >
        <img src={`${icon}`} alt={`Icon`} />
        <button
          role="checkbox"
          aria-checked={value}
          onClick={() => {
            if (!disabled) setvalue(!value);
          }}
          className={`${disabled ? "disabled" : ""} ${value ? "selected" : ""}`}
          tabindex={disabled ? "-1" : ""}
        ></button>
        <div className="eni-square-message">
          <label htmlFor={id}>{title}</label>
        </div>
        <input
        {...props}
        name={name}
        id={id}
          className="eni-square-input"
          type="text"
          value={value}
          required={required}
          minLength="1"
        ></input>
      </div>
    </>
  );
}
EniSquareCheckbox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  disabled:PropTypes.bool,
  checked:PropTypes.bool,
  required:PropTypes.bool,
  name:PropTypes.string,
  };
  