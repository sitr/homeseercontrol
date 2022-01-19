import HsTextStatusDeviceContainer from './components/container/HsTextStatusDeviceContainer';
import HsMultiLineStatusDeviceContainer from './components/container/HSMultiLineStatusDeviceContainer';
import HsButton from './components/container/HsButtonContainer';
import HsLed from './components/container/HsLedContainer';
import { Link }  from "react-router-dom";
import Clock from './components/clock';
import React, { Component } from 'react';

class App extends Component {
   // constructor(props) {
   //    super(props);
   // }

   componentDidMount() {
      document.title = "Hovedkontroll";
   }

   render() {
      return (
         <React.StrictMode>
         <div className="main">
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
            <div className="container_inset garbagePlan">
               <label>Søppeltømming</label>
               <div>
                  <img alt="Recycle food waste" src="/images/vesar_epleskrott.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1158"
                     className=""
                  />
               </div>
               <div>
                  <img alt="Recycle metal and glass" src="/images/vesar_glassmetall.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1159"
                     className=""
                  />
               </div>
               <div>
                  <img alt="Recycle plastic" src="/images/vesar_plast.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1160"
                     className=""
                  />
               </div>
               <div>
                  <img alt="Recycle vaste" src="/images/vesar_restavfall.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1161"
                     className=""
                  />
               </div>
               <div>
                  <img alt="Recycle paper" src="/images/vesar_papir.png"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1162"
                     className=""
                  />
               </div>
            </div>
            <div className="container_raised keyPanel">
               <HsButton
                  deviceId="130"
                  buttonText="Normal belysning"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Normal belysning"}'
               />
               <Link to='/music'>
                  <button className="button__navigation">Musikk</button>
               </Link>
               <HsButton
                  deviceId="130"
                  buttonText="Dempet belysning"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Dempet belysning"}'
               />
               <Link to='/outdoor'>
                  <button className="button__navigation">Garasje</button>
               </Link>
               <HsButton
                  deviceId="130"
                  buttonText="Alt lys på"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Full belysning"}'
               />
               <Link to='/house'>
                  <button className="button__navigation">Status</button>
               </Link>

               <HsButton
                  deviceId="130"
                  buttonText="Alt lys av"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Ingen belysning"}'
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
                  <br/>
                  <label className="weather_station_label">Lufttrykk:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="1112"
                     className="weather_station_value"
                  />
               </div>
            </div>
            <div className='container_inset garbagePlan'>
               <label>Strømpriser i dag</label>
               <HsMultiLineStatusDeviceContainer
                  deviceId="2009"
               />
            </div>
            <div className="container_raised ledPanel">
               <label>Motorvarmer:</label>
               <HsLed
                  deviceId="571"
               />
               <label>Vaskemaskin:</label>
               <HsLed
                  deviceId="181"
               />
               <label>Tørketrommel:</label>
               <HsLed
                  deviceId="180"
               />
               <label>Støvsuger:</label>
               <HsLed
                  deviceId="1342"
               />
            </div>
            <Clock className="clock" />
         </div>
         </React.StrictMode>
      );
   }
}

export default App;