import React from "react";
import PropTypes from "prop-types";

export default function EniCheckbox({
  title = "",
  disabled = false,
  checked = false,
  name = "",
  ...props
}) {
  const [value, setvalue] = React.useState(checked);

  return (
    <>
      <div
        role="checkbox"
        aria-checked={value}
        onClick={() => {
          if (!disabled) setvalue(!value);
        }}
        className={`eni-checkbox ${disabled ? "disabled" : ""} ${
          value ? "selected" : ""
        }`}
      >
        <button className="checkbox" aria-labelledby={name} disabled={disabled}>
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6577 0.552804C15.1843 0.0536718 14.3951 0.0316887 13.8952 0.506255L5.93607 8.05445L2.13978 4.15671C1.65897 3.6634 0.870626 3.65259 0.376899 4.13346C-0.116408 4.61386 -0.126799 5.40304 0.353594 5.89634L5.00808 10.6751C5.252 10.9257 5.57617 11.052 5.90118 11.052C6.20955 11.052 6.51791 10.9381 6.75937 10.71L15.6112 2.31532C16.1107 1.84154 16.1318 1.05236 15.6577 0.552804Z"
              fill="#808080"
            />
          </svg>
        </button>
        <span id={name}>{title}</span>
      </div>
      <input
        className="eni-select-input"
        type="checkbox"
        name={name}
        checked={value}
        value={title}
        disabled={disabled}
        {...props}
      ></input>
    </>
  );
}
EniCheckbox.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};
