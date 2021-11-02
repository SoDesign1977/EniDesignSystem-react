import React from "react";
import PropTypes from 'prop-types';
import "./EniCheckbox.scss"
import SelectSVG  from "../../../styles/assets/images/select-checked.svg";
export default function EniCheckbox({
  title = "",
  disabled = false,
  checked = false,
  required = false,
  name="",
  ...props
}) {

  const [value, setvalue] = React.useState(checked);

  return (
    <>
      <div
        {...props}
        role="checkbox"
        aria-checked={value}
        onClick={() => {
          if (!disabled) setvalue(!value);
        }}
        className={`eni-checkbox ${disabled ? "disabled" : ""} ${
          value ? "selected" : ""
        }`}
      >
        <button className="checkbox" aria-labelledby={name} disabled={disabled}>
          <SelectSVG></SelectSVG>
        </button>
        <span id={name}>{title}</span>
      </div>
      <input
        className="eni-select-input"
        type="checkbox"
        name={name}
        checked={value}
        value={title}
        disabled={disabled}
        required={required}
        minLength="1"
      ></input>
    </>
  );
}
EniCheckbox.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
