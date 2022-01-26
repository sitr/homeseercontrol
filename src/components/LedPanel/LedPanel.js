import React from "react";
import HsLedContainer from "../Leds/HsLedContainer";

class LedPanel extends React.Component {
    render() {
        return(
            <div className="container_raised ledPanel">
               <label>Motorvarmer:</label>
               <HsLedContainer
                  deviceId="571"
               />
               <label>Vaskemaskin:</label>
               <HsLedContainer
                  deviceId="181"
               />
               <label>Tørketrommel:</label>
               <HsLedContainer
                  deviceId="180"
               />
               <label>Støvsuger:</label>
               <HsLedContainer
                  deviceId="1342"
               />
            </div>
        );
    }
}
export default LedPanel;