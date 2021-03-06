import React from "react";
import PropTypes from 'prop-types';

export default function EniTooltipBottom({ ariaId, title, children,state }) {
  return (
    <>
      <div className="eni-tooltip"  >
        {children}
        <span className={`eni-tooltiptext ${state}`} role="tooltip" id={ariaId} >{title}</span>
      </div>
    </>
  );
}
EniTooltipBottom.propTypes = {
  state: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  ariaId:PropTypes.string,
  title:PropTypes.string,
  children: PropTypes.element,
};
