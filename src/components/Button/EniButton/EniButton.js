import React from "react";
import PropTypes from 'prop-types';

import  ArrowSVG  from "../../../styles/assets/images/arrow.svg";
import  ArrowDisabledSVG  from "../../../styles/assets/images/arrowDisable.svg";
export default function EniButton({ title, disabled = false,arrow=false,state,...props }) {
  return (
    <>
      <button
      {...props}
        className={`eni-button ${state}`}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {title}{" "}
        {arrow ? disabled ? (
          <ArrowDisabledSVG className="eni-button-icon"></ArrowDisabledSVG>
        ) : (
          <ArrowSVG className="eni-button-icon"></ArrowSVG>
        ): ""}
      </button>
    </>
  );
}
EniButton.propTypes = {
  state: PropTypes.oneOf(["plain", "primary", "secondary","tertiary"]).isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
};
