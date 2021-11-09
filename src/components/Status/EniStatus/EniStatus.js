import React from 'react';
import PropTypes from 'prop-types';


export default function EniStatus({ message,state }) {
  return (
	<>
		<div className={`eni-status eni-status-${state}`} aria-label={message}>
			<span>{message}</span>
		</div>
	</>
  );
}
EniStatus.propTypes = {
	message:PropTypes.string,
	state: PropTypes.oneOf(["disabled", "error", "rejected","success"]).isRequired,
  };
  