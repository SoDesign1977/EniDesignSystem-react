import React from "react";
import PropTypes from "prop-types";

export default function EniNotation({ rate, state }) {
  const generateRate = () => {
    let buffer = rate;
    let stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <svg
          key={index}
          width="46"
          height="44"
          viewBox="0 0 46 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
            fill={buffer > 0 ? "#FFD300" : "#CCCCCC"}
          />
        </svg>
      );
      buffer--;
    }
    return stars;
  };

  return (
    <div className={`eni-notation ${state === "black" ? "black" : ""}`}>
      {generateRate()}
    </div>
  );
}
EniInput.propTypes = {
  rate: PropTypes.number,
  state: PropTypes.oneOf(["", "black"]),
};
