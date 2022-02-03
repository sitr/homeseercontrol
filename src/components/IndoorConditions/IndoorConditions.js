import React from "react";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class IndoorConditions extends React.Component {

    render() {
        return(
         <div className="panel raised_outer indoorConditions">
            <img src="images/bolt1.png" className="bolt"/>
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <div className="panel sunken">
               <HsTextStatusDeviceContainer
                  deviceId="1105"
                  className="temperature temperature_plus"
               />
               <div>
                  <label className="weather_station_label">Luftfuktighet:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1110"
                     className="weather_station_value"
                  />
                  <br/>
                  <label className="weather_station_label">Lufttrykk:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1112"
                     className="weather_station_value"
                  />
               </div>
            </div>
         </div>
        )
    };
}
export default IndoorConditions;