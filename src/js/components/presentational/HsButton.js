import React from "react";
import PropTypes from "prop-types";

const HsButton = ({ device, className, buttonText }) => (
   <button id={device.ref} className={className}>
      {buttonText}
   </button>
);
HsButton.propTypes = {
   className: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired
};
export default HsButton;