import React from "react";
import PropTypes from 'prop-types';

import { generateKey } from "../../../js/helpers";
import  SelectSVG  from "../../../styles/assets/images/select-checked.svg";

export default function EniListCheckbox({
  legend,
  name="",
  checkbox = [
    {
      title: "",
      disabled: false,
      checked: false,
      props: null,
    },
  ],
 required=false,
  ...props
}) {

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
             
              className={`${element.disabled ? "disabled" : ""} ${
                value.includes(element.title) ? "selected" : ""
              }`}
            >
              <button className="checkbox" aria-labelledby={x} disabled={element.disabled}>
                <SelectSVG></SelectSVG>
              </button>
              <span id={x}>{element.title}</span>
            </li>
          );
        })}
      </fieldset>
   
  );
}


EniListCheckbox.propTypes = {
  legend:PropTypes.string,
  name:PropTypes.string,
  checkbox:PropTypes.arrayOf( PropTypes.shape({
    title: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    props: null,
    required: PropTypes.bool,

    })),
};
