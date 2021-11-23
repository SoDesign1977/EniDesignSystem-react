import React from "react";
import PropTypes from 'prop-types';

import { generateKey } from "../../../js/helpers";

export default function EniRadioButton({
  title,
  radios = [{ value: "", disabled: false, checked: false }],
  required = false,
  name="",
  ...props
}) {
  const [value, setValue] = React.useState("");
  const [id, setid] = React.useState(generateKey("EniRadio"));

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
      className="eni-group-radio-button"
      role="radiogroup"
      aria-labelledby={id}
    >
      <input
      {...props}
        name={name}
        type="text"
        className={`eni-radio-input`}
        required={required}
        minLength="2"
        value={value}
      ></input>
      <legend id={id} className={`eni-group-radio-button-label `}>
        {title}
      </legend>
      {radios.map((element) => {
        let x = generateKey("radio");
        return (
          <button
            role="radio"
            key={x}
            disabled={element.disabled}
            className={`eni-radio-button ${
              element.disabled ? "disabled" : ""
            } ${element.value === value ? "checked" : ""}`}
            aria-checked={element.value === value ? true : false}
            onClick={() => {
              if (!element.disabled) {
                setValue(element.value);
              }
            }}
          >
            {element.value}
          </button>
        );
      })}
    </fieldset>
  );
}
EniRadioButton.propTypes = {
  title:PropTypes.string,
  name:PropTypes.string,
  radios:PropTypes.arrayOf( PropTypes.shape({
    value: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    })),
    required:PropTypes.bool
};
