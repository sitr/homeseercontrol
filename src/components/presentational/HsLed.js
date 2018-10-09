import React from "react";

const HsLed = (props) => {
   return (
      <div
         deviceId={props.device.ref}
         id={props.id}
         className={props.className}>
      </div>
   );
}
export default HsLed;