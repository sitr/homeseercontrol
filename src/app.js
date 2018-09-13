import HsTextStatusDeviceContainer from './components/container/HsTextStatusDeviceContainer';
import HsButton from './components/container/HsButtonContainer';
import Clock from './components/clock';
import React, { Component } from 'react';

class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: ''
      };
   }
   render() {
      return (
         <div className="main">
            <div className="container_inset outdoorConditions">
               <HsTextStatusDeviceContainer
                  deviceId="38"
                  statusText={this.state.message}
                  className="temperature temperature_plus"
               />
               <div>
                  <label className="weather_station_label">Føles som:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="478"
                     statusText={this.state.message}
                     className="weather_station_value"
                  /><br/>
                  <label className="weather_station_label">Vindhastighet:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="476"
                     statusText={this.state.message}
                     className="weather_station_value"
                  /><br/>
                  <label className="weather_station_label">Vindretning:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="477"
                     statusText={this.state.message}
                     className="weather_station_value"
                  />
               </div>
               <HsTextStatusDeviceContainer
                  deviceId="284"
                  statusText={this.state.message}
                  className="weather_autotext"
               />
            </div>
            <div className="container_raised keyPanel">
               <HsButton
                  buttonText="Normal belysning"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - normal belysning"}'
               />
               <HsButton
                  buttonText="Musikk"
                  className="button"
               />
               <HsButton
                  buttonText="Dempet belysning"
                  className="button"
                  command='{"cmd": "Event", "groupName": "Lysscener", "eventName": "Stue - dempet belysning"}'
               />
               <HsButton
                  buttonText="Vær"
                  className="button"
               />
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
                  buttonText="Nattmodus"
                  className="button nightMode"
                  command='{"cmd": "Event", "groupName": "Hus", "eventName": "Aktiver nattmodus"}'
               />
            </div>
            <div className="container_inset indoorConditions">
               <HsTextStatusDeviceContainer
                  deviceId="60"
                  statusText={this.state.message}
                  className="temperature temperature_plus"
               />
               <div>
                  <label className="weather_station_label">Luftfuktighet:</label>
                  <HsTextStatusDeviceContainer
                     deviceId="40"
                     statusText={this.state.message}
                     className="weather_station_value"
                  />
               </div>
            </div>
            <Clock className="clock" />
         </div>
      );
   }
}

export default Main;