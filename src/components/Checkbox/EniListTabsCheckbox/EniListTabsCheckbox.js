import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";

export default function EniListTabsCheckbox({
  legend,
  name = "",
  checkbox = [
    {
      title: "",
      disabled: false,
      checked: false,
      props: null,
    },
  ],
  required = false,
  ...props
}) {
  const [value, setvalue] = React.useState([]); // value de l'élément selectionné pour l'input
  React.useEffect(() => {
    InitChecked();
  }, []);
  const InitChecked = () => {
    let titles = [];
    checkbox.forEach((e) => {
      if (e.checked) titles.push(e.title);
    });
    setvalue(titles);
  };
  const handleChange = (data) => {
    if (value.includes(data)) {
      setvalue(
        value.filter(function (val) {
          return val !== data;
        })
      );
    } else {
      setvalue([...value, data]);
    }
  };
  return (
    <fieldset className="eni-group-checkbox" tabindex="0" aria-controls="condX">
      <input
        {...props}
        name={name}
        className="eni-checkbox-input"
        type="text"
        value={value}
        required={required}
        minLength="1"
      ></input>
      <legend className="eni-group-checkbox-label">{legend}</legend>
      {checkbox.map((element, index) => {
        let x = generateKey("checkbox");
        return (
          <li
            id={`cond${index}`}
            key={x}
            role="checkbox"
            aria-checked={value.includes(element.title)}
            onClick={() => {
              if (!element.disabled) handleChange(element.title);
            }}
       
          >
            <button
              className={`eni-checkbox-tabs ${
                element.disabled ? "disabled" : ""
              }  ${
                value.includes(element.title) ? "checked" : ""
              }`}
              disabled={element.disabled}
              aria-checked={value}
              role="checkbox"
              aria-labelledby={x}
              key={x}
              onClick={() => {
                setvalue(!value);
              }}
            >
              <div className="eni-checkbox-tabs-img">
                <img src={`${element.icon}`} alt={`Icon`} />
              </div>
              <div className="eni-checkbox-tabs-message">
                <span id={x}>{element.title}</span>
              </div>
            </button>
          </li>
        );
      })}
    </fieldset>
  );
}

EniListTabsCheckbox.propTypes = {
  legend: PropTypes.string,
  name: PropTypes.string,
  checkbox: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
      icon:PropTypes.string,
      props: null,
      required: PropTypes.bool,
    })
  ),
};
