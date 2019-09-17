import HsTextStatusDeviceContainer from './components/container/HsTextStatusDeviceContainer';
import HsButton from './components/container/HsButtonContainer';
import { Link }  from "react-router-dom";
import Clock from './components/clock';
import React, { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      document.title = "Hovedkontroll";
   }

   render() {
      return (
         <div className="main">
            <div className="container_inset outdoorConditions">
               <HsTextStatusDeviceContainer
                  deviceId="1117"
                  className="temperature temperature_plus"
               />
               <div>
                  <label className="weather_station_label">Føles som:</label>
                  { <HsTextStatusDeviceContainer
                     deviceId="1163"
                     className="weather_station_value"
                  /> }
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
               </div>
               <HsTextStatusDeviceContainer
                  deviceId="284"
                  className="weather_autotext"
               />
            </div>
            <div className="container_raised keyPanel">
               <HsButton
                  buttonText="Normal belysning"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - normal belysning"}'
               />
               <Link to='/music'>
                  <button className="button__navigation">Musikk</button>
               </Link>
               <HsButton
                  buttonText="Dempet belysning"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - dempet belysning"}'
               />
               <Link to='/outdoor'>
                  <button className="button__navigation">Garasje</button>
               </Link>
               <HsButton
                  buttonText="Alt lys på"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - full belysning"}'
               />
               <div/>
               <HsButton
                  buttonText="Alt lys av"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - ingen belysning"}'
               />
               <HsButton
                  deviceId="87"
                  buttonText="Nattmodus"
                  className="button nightMode"
                  command='{"cmd": "SetValue", "value": "On"}'
                  isLiveButton={true}
               />
            </div>
            <div className="container_inset indoorConditions">
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
               </div>
            </div>
            <div className="container_inset garbagePlan">
               <div>
                  <img src="/images/vesar_epleskrott.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1158"
                     className=""
                  />
               </div>
               <div>
                  <img src="/images/vesar_glassmetall.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1159"
                     className=""
                  />
               </div>
               <div>
                  <img src="/images/vesar_plast.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1160"
                     className=""
                  />
               </div>
               <div>
                  <img src="/images/vesar_restavfall.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1161"
                     className=""
                  />
               </div>
               <div>
                  <img src="/images/vesar_papir.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1162"
                     className=""
                  />
               </div>
            </div>
            <Clock className="clock" />
         </div>
      );
   }
}

export default App;