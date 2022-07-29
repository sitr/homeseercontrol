import React from "react";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class IndoorConditions extends React.Component {

    render() {
        return(
         <div className="panel raised_outer indoorConditionsContainer">
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt"/>
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <p className="panel_title">Innendørs</p>
            <div className="panel sunken">
               <HsTextStatusDeviceContainer
                  deviceId="1105"
                  className="temperature temperature_plus"
                  deviceInterval = "10 * 60 * 1000"
               />
               <div className="indoorConditions">
                  <label>Luftfuktighet:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1110"
                     className="value"
                     deviceInterval = "10 * 60 * 1000"
                  />
                  <label>Lufttrykk:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1112"
                     className="value"
                     deviceInterval = "10 * 60 * 1000"
                  />
               </div>
            </div>
         </div>
        )
    };
}
export default IndoorConditions;