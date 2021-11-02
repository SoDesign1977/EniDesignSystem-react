import React from "react";
import PropTypes from "prop-types";
import SelectSVG from "../../../../styles/assets/images/select-checked.svg";
import SelectArrowSVG from "../../../../styles/assets/images/select-arrow-down.svg";
import { generateKey } from "../../../../js/helpers";
import "../EniSelectWithUl.scss"
export default function EniSelectCheckbox({
  required = false,
  title = "test",
  placeholder = "Choisir une option",
  items = [{ value: "Need Items", disabled: false, categorie: "Categorie" }],
  disabled = false,
  name = "",
  errorMessage = "Champs Obligatoire",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSelect"));
  const [value, setvalue] = React.useState([]); // value de l'élément selectionné pour l'input
  const [open, setopen] = React.useState(false); // select est open ou pas

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

  const OpenSelect = (bool) => {
    if (!disabled) {
      setopen(bool);
    }
  };
  const getCheckbox = (array) => {
    let buffer = [];
    array.forEach((element) => {
      let x = generateKey("select");
      buffer.push(
        <li
          key={x}
          role="option"
          aria-selected={value.includes(element.value)}
          onClick={() => {
            if (!element.disabled) handleChange(element.value);
          }}
          className={`${element.disabled ? "disabled" : ""} ${
            value.includes(element.value) ? "selected" : ""
          }`}
        >
          <button
            className="checkbox"
            aria-labelledby={x}
            disabled={element.disabled}
          >
            <SelectSVG></SelectSVG>
          </button>
          <span id={x}>{element.value}</span>
        </li>
      );
    });
    return buffer;
  };

  const CheckboxFilter = () => {
    let buffer = [];
    let addCateg = false;
    let Categ = [];
    // Organisation des categorie (unique in array)
    items.forEach((element) => {
      for (const property in element) {
        if (property === "categorie") {
          if (!Categ.hasOwnProperty(element[property])) {
            Categ[element[property]] = [];
            addCateg = true;
          }
          Categ[element[property]].push(element);
        }
      }
    });

    // si il y a minimun une categorie
    if (addCateg) {
      for (const cat in Categ) {
        buffer.push(
          <li className={`eni-categ`} key={generateKey()}>
            <span>Catégorie {cat}</span>
          </li>
        );

        buffer = [...buffer, ...getCheckbox(Categ[cat])];
      }
    } else {
      buffer = [...buffer, ...getCheckbox(items)];
    }

    return (
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="exp_elem"
        className={`eni-select-options ${
          open ? "eni-select-open" : "eni-select-close"
        } ${addCateg ? "eni-select-categ" : ""}`}
      >
        {buffer}
      </ul>
    );
  };
  return (
    <>
      {/*WINDOW HORS BOX CLIQUE*/}
      <div
        className={`${open ? "eni-select-window-open" : ""}`}
        onClick={() => {
          OpenSelect(false);
        }}
      ></div>
      <div className="EniSelectWithUl">
        {/*INPUT LABEL*/}
        <input
          {...props}
          className="eni-select-input"
          type="text"
          id={id}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          minLength="1"
        ></input>
        <label className={`eni-input-label exp_elem`} htmlFor={id}>
          {title}
        </label>

        <div className={`eni-select `}>
          {/*SELECT BOX*/}
          <button
            aria-labelledby="exp_elem"
            aria-haspopup="listbox"
            className={`eni-select-box  ${open ? "eni-select-box-open" : ""}`}
            onClick={() => {
              OpenSelect(!open);
            }}
          >
            <span>
              {value.length > 0
                ? value.map((el) => {
                    return `${el} `;
                  })
                : placeholder}
            </span>
            <SelectArrowSVG></SelectArrowSVG>
          </button>

          {/*LIST SELECT*/}
          <div className="eni-select-options-container">{CheckboxFilter()}</div>
        </div>
        {/*ERROR MESSAGE*/}
        <span className="error-message">{errorMessage}</span>
      </div>
    </>
  );
}
EniSelectCheckbox.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      disabled: PropTypes.bool,
      categorie: PropTypes.string,
    })
  ),
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};
