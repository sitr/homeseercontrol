import React from "react";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class OutdoorConditions extends React.Component {

    render() {
        return (
         <div className="panel raised_outer outdoorConditionsContainer">
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
            <p className="panel_title">Utendørs</p>
            <div className="panel sunken">
               <HsTextStatusDeviceContainer
                  deviceId="1117"
                  className="temperature"
                  statusType="temperature"
                  deviceInterval = "10 * 60 * 1000"
               />
               <div className="outdoorConditions">
                  <label className="weather_station_label">Føles som:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1163"
                     className="weather_station_value"
                     deviceInterval = "60 * 1000"
                  />
                  <br/>
                  <label className="weather_station_label">Vind:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1134"
                     className="weather_station_value"
                     deviceInterval = "60 * 1000"
                  />
                  <HsTextStatusDeviceContainer
                     deviceId="1133"
                     className="weather_station_value"
                     deviceInterval = "60 * 1000"
                  />
                  <label className="weather_station_label">Vindkast:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1136"
                     className="weather_station_value"
                  />
                  <HsTextStatusDeviceContainer
                     deviceId="1135"
                     className="weather_station_value"
                     deviceInterval = "5 * 1000"
                  />
                  <label className="weather_station_label">Nedbør:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1129"
                     className="weather_station_value"
                     deviceInterval = "60 * 1000"
                  />
               </div>
               <HsTextStatusDeviceContainer
                  deviceId="284"
                  className="weather_autotext"
                  deviceInterval = "60 * 60 * 1000"
               />
            </div>
         </div>
        )
    }
}
export default OutdoorConditions;