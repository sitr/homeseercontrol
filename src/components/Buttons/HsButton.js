import React from "react";
import PropTypes from "prop-types";

const HsButton_old = (props) => (
   <button
      id={props.id}
      className={props.className}
      onClick={props.onClick}>
      {props.buttonText}
   </button>
);
HsButton_old.propTypes = {
   className: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   buttonText: PropTypes.string.isRequired
};
export default HsButton_old;