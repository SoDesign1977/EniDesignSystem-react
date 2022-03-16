import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";
export default function EniInput({
  title,
  placeholder = "Placeholder",
  disabled = false,
  required = false,
  name = "",
  errorMessage,
  onChange = () => {},
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniInput"));
  const [value, setvalue] = React.useState("");
  const handleChange = (event) => {
    setvalue(event.target.value);
    onChange(event.target);
  };
  return (
    <>
      <div
        className={`eni-input-container ${
          value.length > 0 ? "valuefocus" : ""
        }`}
      >
        <input
          onChange={handleChange}
          {...props}
          className={`form-control eni-input`}
          id={id}
          name={name}
          disabled={disabled}
          aria-required={required}
          required={required}
          value={value}
        />
        <label
          className={`eni-input-label ${required ? "required" : ""} ${
            disabled ? "disabled" : ""
          } `}
          htmlFor={id}
        >
          {title}
        </label>
        <span className="error-message">{errorMessage}</span>
      </div>
    </>
  );
}
EniInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};
