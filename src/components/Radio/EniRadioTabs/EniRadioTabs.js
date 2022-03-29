import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";

export default function EniRadioTabs({
  title,
  radios = [{ value: "", disabled: false, checked: false }],
  required = false,
  name = "",
  ...props
}) {
  const [value, setValue] = React.useState("");
  const [id, setid] = React.useState(generateKey("EniRadioTabs"));

  React.useEffect(() => {
    radioChecker();
  }, []);

  const radioChecker = () => {
    let x = "";
    radios.forEach((element) => {
      if (element.checked === true && value === "") {
        x = element.value;
      }
    });

    setValue(x);
  };

  return (
    <fieldset
      className="eni-group-radio-tabs"
      role="radiogroup"
      aria-labelledby={id}
    >
      <input
        {...props}
        name={name}
        type="button"
        className={`eni-radio-tabs-input`}
        required={required}
        minLength="2"
        value={value}
      ></input>
      <legend id={id} className={`eni-group-radio-tabs-label `}>
        {title}
      </legend>
      {radios.map((element) => {
        let x = generateKey("radio");
        return (
          <button
            className={`eni-radio-tabs ${
              element.disabled ? "disabled" : ""
            } ${element.value === value ? "checked" : ""}`}
            disabled={element.disabled}
            aria-checked={element.value === value ? true : false}
            role="radio"
            aria-labelledby={x}
            key={x}
            onClick={() => {
              if (!element.disabled) {
                setValue(element.value);
              }
            }}
          >
            <div className="eni-radio-tabs-img">
              <img src={`${element.icon}`} alt={`Icon`} />
            </div>
            <div className="eni-radio-tabs-message">
              <span id={x}>{element.value}</span>
            </div>
          </button>
        );
      })}
    </fieldset>
  );
}
EniRadioTabs.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
      icon: PropTypes.string,
    })
  ),
  required: PropTypes.bool,
};
