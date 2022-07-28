import React from "react";
import HsLedContainer from "../Leds/HsLedContainer";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class LedPanel extends React.Component {
    render() {
        return(
         <div className="panel raised_outer ledPanelContainer">
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <div className="raised_inner ledPanel">
                  <label>Motorvarmer:</label>
                  <HsLedContainer
                     deviceId="2197"
                     deviceInterval = "5 * 60 * 1000"
                  />
                  <label>Vaskemaskin:</label>
                  <HsLedContainer
                     deviceId="181"
                     deviceInterval = "5* 60 * 1000"
                  />
                  <label>Tørketrommel:</label>
                  <HsLedContainer
                     deviceId="180"
                     deviceInterval = "5* 60 * 1000"
                  />
                  <label className="vacuum">Støvsuger:(
                  <HsTextStatusDeviceContainer
                     deviceId="1347"
                     className=""
                     deviceInterval = "60 * 1000"
                  />)</label>
                  <HsLedContainer
                     deviceId="1336"
                     deviceInterval = "10 * 1000"
                  />
                  <label>
                     Robotklipper (
                        <HsTextStatusDeviceContainer
                           deviceId="1577"
                           deviceInterval = "60 * 1000" />):
                  </label>
                  <HsLedContainer
                     deviceId="1570"
                     deviceInterval = "60 * 1000"
                  />
               </div>
            </div>
        );
    }
}
export default LedPanel;