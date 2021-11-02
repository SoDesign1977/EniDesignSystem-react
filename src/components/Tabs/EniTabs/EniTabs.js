import React from "react";
import { generateKey } from "../../../js/helpers";
import PropTypes from 'prop-types';
import "./EniTabs.scss"
export default function EniTabs({
  tabs = [
    { icon: "", title: "", components: <div></div>, disabled: false },
  ],
}) {
  const [tabsChecked, settabsChecked] = React.useState(-1);

  React.useEffect(() => {
      tabsChecker();
  }, []);

  const tabsChecker = () => {
    let x = -1;
    tabs.forEach((element, index) => {
      if (element.disabled !== true && x === -1) {
        x = index;
      }
    });
    settabsChecked(x);
  };
  return (
    <>
      <div
        className={`eni-tabs-group `}
        role="tablist"
        aria-label="labelpurposeoftheset"
        aria-controls="IDREF"
      >
        {tabs.map((element, index) => {
          let x = generateKey("tabs");
          return (
            <button
              id={`${element.title}-tabs`}
              className={`eni-tabs ${tabsChecked == index ? "selected" : ""}`}
              disabled={element.disabled}
              aria-selected={tabsChecked == index ? true : false}
              role="tab"
              aria-labelledby={x}
              aria-controls={`${element.title}-tabs`}
              key={x}
              onClick={() => {
                settabsChecked(index);
              }}
            >
              <div className="eni-tabs-img">
                <img
                  className="eni-tabs-img"
                  src={`${element.icon}`}
                  alt={`Icon`}
                />
              </div>
              <div className="eni-tabs-message">
                <span id={x}>{element.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className={`eni-tabs-info-group`}>
        {tabs.map((element, index) => {
          return (
            <div
              className={`eni-tabs-info elec ${
                tabsChecked === index ? "display" : ""
              }`}
              key={generateKey("tabsContent")}
              aria-labelledby={`${element.title}-tabs`}
              tabIndex="0"
              role="tabpanel"
            >
              <span>{element.components}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
EniTabs.propTypes = {
  tabs:PropTypes.arrayOf( PropTypes.shape({
    icon:PropTypes.string,
    title:PropTypes.string,
    components: PropTypes.element,
    disabled: PropTypes.bool,
    })),
};
