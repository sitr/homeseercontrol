import React from "react";
import HsLedContainer from "../Leds/HsLedContainer";

class LedPanel extends React.Component {
    render() {
        return(
         <div className="panel raised_outer ledPanelContainer">
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <div className="raised_inner ledPanel">
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
            </div>
        );
    }
}
export default LedPanel;