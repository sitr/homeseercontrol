import React from "react";

const HsTextStatusDevice = (props) => {
   return (
      <div id={props.device.ref} className={props.className}>
         <span>
            {props.device.status}
         </span>
      </div>
   )
};
export default HsTextStatusDevice;