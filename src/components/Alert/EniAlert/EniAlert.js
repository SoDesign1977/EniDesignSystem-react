import React from "react";
import PropTypes from "prop-types";

import  ErrorSVG  from "../../../styles/assets/images/error.svg";
import  ArrowRedSVG  from "../../../styles/assets/images/arrowRed.svg";

import InfoSVG  from "../../../styles/assets/images/info.svg";
import  ArrowBlueSVG from "../../../styles/assets/images/arrowBlue.svg";

import  SuccessSVG from "../../../styles/assets/images/success.svg";
import  ArrowGreenSVG from "../../../styles/assets/images/arrowGreen.svg";
export default function EniAlert({ message, linkMessage, linkUrl, state }) {
  return (
    <div className={`eni-alert eni-alert-${state}`} role="alert">
      {state === "error" ? (
        <ErrorSVG></ErrorSVG>
      ) : state === "success" ? (
        <SuccessSVG></SuccessSVG>
      ) : state === "info" ? (
        <InfoSVG></InfoSVG>
      ) : (
        ""
      )}
      <div className="eni-alert-message">
        <span tabIndex="0">{message}</span>

        {linkMessage && linkUrl && (
          <a className="eni-alert-link" href={`${linkUrl}`}>
            {linkMessage}
            {state === "error" ? (
              <ArrowRedSVG className="eni-alert-icon"></ArrowRedSVG>
            ) : state === "success" ? (
              <ArrowGreenSVG className="eni-alert-icon"></ArrowGreenSVG>
            ) : state === "info" ? (
              <ArrowBlueSVG className="eni-alert-icon"></ArrowBlueSVG>
            ) : (
              ""
            )}
          </a>
        )}
      </div>
    </div>
  );
}
EniAlert.propTypes = {
  state: PropTypes.oneOf(["error", "info", "success"]).isRequired,
  message: PropTypes.string,
  linkMessage: PropTypes.string,
  linkUrl: PropTypes.string,
};
