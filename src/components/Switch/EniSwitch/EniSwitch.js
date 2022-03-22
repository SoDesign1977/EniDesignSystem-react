import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";

export default function EniSwitch({
  title,
  title2,
  disabled = false,
  required = false,
  checked = false,
  name = "",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSwitch"));
  const [value, setvalue] = React.useState(checked);

  React.useEffect(() => {
    if (value != checked) setvalue(checked);
  }, [checked]);
  return (
    <>
      <div className="eni-group-switch" role="radiogroup">
<<<<<<< Updated upstream
        <div className={`eni-switch ${required ? "required" : ""} ${disabled ? "disabled" : ""}`}>
=======
        {title2 && (
          <label
            className={`eni-switch-value eni-switch-label  ${
              required ? "required" : ""
            } ${disabled ? "disabled" : ""} ${value ? "" : "checked"}`}
            htmlFor={id}
          >
            {title}
          </label>
        )}
        <div
          className={`eni-switch ${required ? "required" : ""} ${
            disabled ? "disabled" : ""
          } ${title2 ? "title2" : ""}`}
        >
>>>>>>> Stashed changes
          <input
            onClick={() => setvalue(!value)}
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
<<<<<<< Updated upstream
          className={`eni-switch-value eni-switch-label ${required ? "required" : ""} ${disabled ? "disabled" : ""} ${
            value ? "selected" : ""
          }`}
=======
          className={`eni-switch-value eni-switch-label ${
            required ? "required" : ""
          } ${disabled ? "disabled" : ""} ${value ? "checked" : ""}`}
>>>>>>> Stashed changes
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
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
};
