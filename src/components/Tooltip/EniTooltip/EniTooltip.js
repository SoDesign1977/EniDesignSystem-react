import React from "react";
import PropTypes from 'prop-types';
import "./EniTooltip.scss";
export default function EniTooltipBottom({ ariaId, title, children,state }) {
  return (
    <>
      <div class="eni-tooltip"  >
        {children}
        <span class={`eni-tooltiptext ${state}`} role="tooltip" id={ariaId} >{title}</span>
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
