import React from "react";
import PropTypes from "prop-types";

const HsButton = (props) => (
   <button 
      id={props.device.ref} 
      className={props.className} 
      onClick={props.onClick}>
      {props.buttonText}
   </button>
);
HsButton.propTypes = {
   className: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   buttonText: PropTypes.string.isRequired
};
export default HsButton;