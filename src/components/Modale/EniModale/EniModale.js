import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";


export default function EniModale({
  title,
  children,
  closeButton = false,
  openStatus = false,
  state,
  closeAction = () => {},
}) {
  const [id, setid] = React.useState(generateKey("EniModale"));
  const dialog = React.useRef(null);
  const handleKeyPress = (event) => {
    console.log(event);
    if (event.keyCode === 27) {
      closeAction();
    }
  };
  React.useEffect(() => {
    if (openStatus) {
      dialog.current.focus();
    }
  }, [openStatus]);
  return (
    <>
      <div
        className={`eni-modale eni-modale-${state} ${
          openStatus ? "" : "eni-close"
        }`}
        role="dialog"
        aria-labelledby={id}
        tabIndex="0"
        aria-modal={openStatus}
        onKeyDown={handleKeyPress}
        ref={dialog}
      >
        <div className="eni-modale-container">
          {state === "error" ? (
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.25 38H33.75V41H31.25V38ZM31.25 26H33.75V35.0869H31.25V26Z"
                fill="#D0003E"
              />
              <path
                d="M29.9379 1.47369C31.0766 -0.491226 33.9234 -0.49123 35.0621 1.47368L64.0992 51.5789C65.2379 53.5439 63.8146 56 61.5371 56H3.46287C1.18545 56 -0.237939 53.5439 0.900771 51.5789L29.9379 1.47369Z"
                fill="#D0003E"
                fill-opacity="0.15"
              />
            </svg>
          ) : state === "success" ? (
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32.5"
                cy="32"
                r="32"
                fill="#51A126"
                fill-opacity="0.15"
              />
              <path
                d="M29 36.865L24.135 32L22.4784 33.645L29 40.1666L43 26.1666L41.355 24.5216L29 36.865Z"
                fill="#51A126"
              />
            </svg>
          ) : state === "info" ? (
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="32"
                fill="#006699"
                fill-opacity="0.15"
              />
              <path
                d="M32.0003 27.983C30.9775 27.983 30.1484 28.7796 30.1484 29.7623V41.2207C30.1484 42.2034 30.9775 43 32.0003 43C33.0231 43 33.8521 42.2033 33.8521 41.2206V29.7623C33.8521 28.7796 33.0231 27.983 32.0003 27.983Z"
                fill="#006699"
              />
              <path
                d="M32 25.8042C33.3807 25.8042 34.5 24.7288 34.5 23.4021C34.5 22.0755 33.3807 21 32 21C30.6193 21 29.5 22.0755 29.5 23.4021C29.5 24.7288 30.6193 25.8042 32 25.8042Z"
                fill="#006699"
              />
            </svg>
          ) : (
            ""
          )}
          <h1 id={id}>{title}</h1>
          <div className="eni-modale-content">{children}</div>
          {closeButton ? (
            <>
              <span id="Access-Close-Button">Fermer</span>
              <button
                onClick={() => {
                  closeAction();
                }}
                aria-labelledby="Access-Close-Button"
                className="eni-modale-button"
              >
                <img
                  src={require("../../../styles/assets/images/close.svg")}
                ></img>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
EniModale.propTypes = {
  title: PropTypes.string,
  state: PropTypes.oneOf(["error", "info", "success", "plain"]).isRequired,
  children: PropTypes.element,
  closeButton: PropTypes.bool,
  openStatus: PropTypes.bool,
  closeAction: PropTypes.func,
};
