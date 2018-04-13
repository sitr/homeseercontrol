import React from "react";
import PropTypes from "prop-types";

const HsTextStatusDevice = ({ device, className }) => (
   <div id={device.ref} className={className}>
      <span>{device.deviceName}</span>
      <span>
         {device.status}
      </span>
   </div>
);
HsTextStatusDevice.propTypes = {
   device: PropTypes.object.isRequired,
   className: PropTypes.string.isRequired
};
export default HsTextStatusDevice;