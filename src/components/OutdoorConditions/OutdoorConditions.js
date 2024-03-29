import React from "react";
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class OutdoorConditions extends React.Component {

    render() {
        return (
            <div className="container_inset outdoorConditions">
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
                  <label className="weather_station_label">Vindhastighet:</label>
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
        )
    }
}
export default OutdoorConditions;