import React from "react";

const HsLed = (props) => {
   return (
      <div
         id={props.device.ref}
         className={props.className}>
      </div>
   );
}
export default HsLed;