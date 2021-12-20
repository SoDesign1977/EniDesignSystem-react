import React from "react";
import PropTypes from "prop-types";

export default function EniButton({
  title,
  disabled = false,
  arrow = false,
  state,
  ...props
}) {
  return (
    <>
      <button
        {...props}
        className={`eni-button ${state}`}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {title}{" "}
        {arrow ? (
          disabled ? (
            <svg
              className="eni-button-icon"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4C4C4C"
                d="M6.53438 0.176401L6.15213 0.537529C6.03196 0.650913 5.96546 0.802481 5.96546 0.963819C5.96546 1.12534 6.03196 1.29062 6.15213 1.404L8.6082 3.73883L0.805098 3.73883C0.453201 3.73883 0.166657 3.98155 0.166657 4.31399L0.166657 4.82499C0.166657 5.15734 0.453201 5.46146 0.805098 5.46146L8.63599 5.46146L6.15213 7.79163C6.03196 7.90519 5.96546 8.04806 5.96546 8.20958C5.96546 8.37092 6.03196 8.51827 6.15213 8.63175L6.53438 8.9909C6.78317 9.22592 7.1879 9.22493 7.4367 8.98992L11.647 5.01079C11.7669 4.8975 11.8333 4.74548 11.8333 4.5828L11.8333 4.5811C11.8333 4.41967 11.7669 4.26801 11.647 4.15472L7.43679 0.176401C7.18809 -0.058793 6.78318 -0.058793 6.53438 0.176401Z"
              />
            </svg>
          ) : (
            <svg
              className="eni-button-icon"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53438 0.176401L6.15213 0.537529C6.03196 0.650913 5.96546 0.802481 5.96546 0.963819C5.96546 1.12534 6.03196 1.29062 6.15213 1.404L8.6082 3.73883L0.805098 3.73883C0.453201 3.73883 0.166657 3.98155 0.166657 4.31399L0.166657 4.82499C0.166657 5.15734 0.453201 5.46146 0.805098 5.46146L8.63599 5.46146L6.15213 7.79163C6.03196 7.90519 5.96546 8.04806 5.96546 8.20958C5.96546 8.37092 6.03196 8.51827 6.15213 8.63175L6.53438 8.9909C6.78317 9.22592 7.1879 9.22493 7.4367 8.98992L11.647 5.01079C11.7669 4.8975 11.8333 4.74548 11.8333 4.5828L11.8333 4.5811C11.8333 4.41967 11.7669 4.26801 11.647 4.15472L7.43679 0.176401C7.18809 -0.058793 6.78318 -0.058793 6.53438 0.176401Z"
                fill="black"
              />
            </svg>
          )
        ) : (
          ""
        )}
      </button>
    </>
  );
}
EniButton.propTypes = {
  state: PropTypes.oneOf(["plain", "primary", "secondary", "tertiary"])
    .isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
};
