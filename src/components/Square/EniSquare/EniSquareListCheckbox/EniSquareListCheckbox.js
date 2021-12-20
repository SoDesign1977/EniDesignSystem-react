import React from "react";
import PropTypes from 'prop-types';

import { generateKey } from "../../../../js/helpers";

export default function EniSquareListCheckbox({
  ListSquare = [
    {
      title: "non",
      icon: "",
      disabled: true,
    },
    {
      title: "oui",
      icon: "",
      disabled: false,
    
    },
  ],
  required=true,
  legend = "test",
  name="",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSquareCheckboxError"));
  const [value, setvalue] = React.useState([]); // value de l'élément selectionné pour l'input


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
    <fieldset
      className="eni-group-square"
      tabindex="0"
      aria-controls="condX"
      aria-labelledby={id}
      role="group"
    >
      <input
         {...props}
         name={name}
        className="eni-square-input"
        type="text"
        value={value}
        required={required}
        minLength="1"
      ></input>
      <legend id={id} className={`eni-square-label`}>{legend}</legend>
      {ListSquare.map((element, index) => {
        let x = generateKey("EniSquare");
        return (
          <div
            key={x}
            className={`eni-square eni-square-box ${
              element.disabled ? "disabled" : ""
            }`}
          >
            <img src={`${element.icon}`} alt={`Icon`} />
            <button
              id={`cond${index}`}
              name={x}
              key={x}
              role="checkbox"
              aria-checked={value.includes(element.title)}
              onClick={() => {
                if (!element.disabled) handleChange(element.title);
              }}
              className={`${element.disabled ? "disabled" : ""} ${
                value.includes(element.title) ? "selected" : ""
              }`}
              tabindex={element.disabled ? "-1" : ""}
            ></button>
            <div className="eni-square-message">
              <label htmlFor={x}>{element.title}</label>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
}
EniSquareListCheckbox.propTypes = {
  legend:PropTypes.string,
  name:PropTypes.string,
  required: PropTypes.bool,
  ListSquare:PropTypes.arrayOf( PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    })),
};
