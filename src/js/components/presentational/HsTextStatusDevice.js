import React from "react";
import PropTypes from "prop-types";

const HsTextStatusDevice = ({ device, className }) => (
   <span className={className} id={device.ref}>
      {device.status}
   </span>
);
HsTextStatusDevice.propTypes = {
   device: PropTypes.object.isRequired,
   className: PropTypes.string.isRequired
};
export default HsTextStatusDevice;