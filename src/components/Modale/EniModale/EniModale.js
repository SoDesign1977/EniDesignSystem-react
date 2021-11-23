import React from "react";
import PropTypes from "prop-types";

import { generateKey } from "../../../js/helpers";

import ModalErrorSVG  from "../../../styles/assets/images/modal-error.svg";
import ModalInfoSVG  from "../../../styles/assets/images/modal-info.svg";
import ModalSuccessSVG  from "../../../styles/assets/images/modal-success.svg";
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
          <h1 id={id}>{title}</h1>
          {state === "error" ? (
            <ModalErrorSVG></ModalErrorSVG>
          ) : state === "success" ? (
            <ModalSuccessSVG></ModalSuccessSVG>
          ) : state === "info" ? (
            <ModalInfoSVG></ModalInfoSVG>
          ) : (
            ""
          )}
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
                <img src={require("../../../styles/assets/images/close.svg")}></img>
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
