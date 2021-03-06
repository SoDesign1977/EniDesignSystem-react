import React from "react";
import PropTypes from "prop-types";
import { generateKey } from "../../../js/helpers";

export default function EniTextArea({
  title,
  disabled = false,
  required = false,
  errorMessage,
  maxLength,
  name = "",
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
    <div
      className={`eni-textarea-container ${
        value.length > 0 ? "valuefocus" : ""
      } ${disabled ? "disabled" : ""}`}
    >
      <textarea
        {...props}
        maxLength={maxLength}
        onChange={handleChange}
        className={`form-control eni-textarea`}
        rows="4"
        cols="50"
        id={id}
        name={name}
        disabled={disabled}
        aria-required={required}
        required={required}
        value={value}
      />
      <div className={`eni-textarea-header `}>
        <label
          className={`eni-textarea-label ${required ? "required" : ""} ${
            disabled ? "disabled" : ""
          } `}
          htmlFor={id}
        >
          {title}
        </label>
        <span id="eni-textarea-caract">
          {maxLength ? maxLength - value.length : value.length}
        </span>
      </div>
      <div className="eni-textarea-background"></div>
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}
EniTextArea.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.number,
};
