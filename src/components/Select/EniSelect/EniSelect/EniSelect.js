import React from "react";
import PropTypes from 'prop-types';



import { generateKey } from "../../../../js/helpers";

export default function EniSelect({
  required = false,
  title = "test",
  placeholder = "Choisir une option",
  items = [{ value: "Need Items", disabled: false, categorie: "Categorie" }],
  disabled = false,
  name="",
  errorMessage = "Champs Obligatoire",
  ...props
}) {
  const [id, setid] = React.useState(generateKey("EniSelect"));
  const [value, setvalue] = React.useState(""); // value de l'élément selectionné pour l'input
  const [open, setopen] = React.useState(false); // select est open ou pas

  const OpenSelect = (bool) => {
    if (!disabled) {
      setopen(bool);
    }
  };
  const getRadio = (array) => {
    let buffer = [];
    array.forEach((element) => {
      let x = generateKey("select");
      buffer.push(
        <li
          key={x}
          role="option"
          aria-selected={value === element.value ? true : false}
          onClick={() => {
            if (!element.disabled) setvalue(element.value);
          }}
          className={`${element.disabled ? "disabled" : ""} ${
            value === element.value ? "selected" : ""
          }`}
        >
          <button
            className="checkbox"
            aria-labelledby={x}
            disabled={element.disabled}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6577 0.552804C15.1843 0.0536718 14.3951 0.0316887 13.8952 0.506255L5.93607 8.05445L2.13978 4.15671C1.65897 3.6634 0.870626 3.65259 0.376899 4.13346C-0.116408 4.61386 -0.126799 5.40304 0.353594 5.89634L5.00808 10.6751C5.252 10.9257 5.57617 11.052 5.90118 11.052C6.20955 11.052 6.51791 10.9381 6.75937 10.71L15.6112 2.31532C16.1107 1.84154 16.1318 1.05236 15.6577 0.552804Z" fill="#808080"/>
</svg>
          </button>
          <span id={x}>{element.value}</span>
        </li>
      );
    });
    return buffer;
  };
  const RadioFilter = () => {
    let buffer = [];
    let addCateg = false;
    let Categ = [];
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
    if (addCateg) {
      for (const cat in Categ) {
        buffer.push(
          <li className={`eni-categ`} key={generateKey()}>
            <span>Catégorie {cat}</span>
          </li>
        );

        buffer = [...buffer, ...getRadio(Categ[cat])];
      }
    } else {
      buffer = [...buffer, ...getRadio(items)];
    }

    return (
      <ul
        tabIndex="-1"
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
      <div className="EniSelectWithUl" role="listbox">
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
        <label className={`eni-input-label exp_elem `} htmlFor={id}>
          {title}
        </label>
        <div className={`eni-select `}>
          {/*SELECT BOX*/}
          <button
            aria-labelledby="exp_elem"
            aria-haspopup="listbox"
            className={`eni-select-box ${open ? "eni-select-box-open" : ""}`}
            onClick={() => {
              OpenSelect(!open);
            }}
          >
            <span>{value ? value : placeholder}</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7443 8.44382L19.2202 7.88539C19.0552 7.71099 18.8358 7.61491 18.6012 7.61491C18.3668 7.61491 18.1471 7.71099 17.9822 7.88539L12.0036 14.2119L6.0181 7.87837C5.85341 7.70397 5.6337 7.60803 5.3993 7.60803C5.16489 7.60803 4.94505 7.70397 4.78023 7.87837L4.256 8.43336C3.91467 8.79427 3.91467 9.38215 4.256 9.74306L11.3824 17.311C11.5471 17.4853 11.7666 17.608 12.0031 17.608H12.0058C12.2403 17.608 12.4598 17.4851 12.6245 17.311L19.7443 9.76357C19.9092 9.58931 19.9997 9.35008 20 9.10204C20 8.85387 19.9092 8.61794 19.7443 8.44382Z" fill="#191919"/>
</svg>

          </button>

          {/*LIST SELECT*/}
          <div className="eni-select-options-container">{RadioFilter()}</div>
        </div>
        {/*ERROR MESSAGE*/}
        <span className="error-message">{errorMessage}</span>
      </div>
    </>
  );
}


EniSelect.propTypes = {
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
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};
