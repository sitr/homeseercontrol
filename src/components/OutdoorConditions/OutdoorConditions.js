import React from "react";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class OutdoorConditions extends React.Component {

    render() {
        return (
         <div className="panel raised_outer outdoorConditions">
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <div className="panel sunken">
               <HsTextStatusDeviceContainer
                  deviceId="1117"
                  className="temperature temperature_plus"
               />
               <div>
                  <label className="weather_station_label">Føles som:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1163"
                     className="weather_station_value"
                  />
                  <br/>
                  <label className="weather_station_label">Vind:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1134"
                     className="weather_station_value"
                  />
                  <HsTextStatusDeviceContainer
                     deviceId="1133"
                     className="weather_station_value"
                  />
                  <br/>
                  <label className="weather_station_label">Vindkast:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1136"
                     className="weather_station_value"
                  />
                  <HsTextStatusDeviceContainer
                     deviceId="1135"
                     className="weather_station_value"
                  />
                  <br/>
                  <label className="weather_station_label">Nedbør:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1129"
                     className="weather_station_value"
                  />
               </div>
               <HsTextStatusDeviceContainer
                  deviceId="284"
                  className="weather_autotext"
               />
            </div>
         </div>
        )
    }
}
export default OutdoorConditions;