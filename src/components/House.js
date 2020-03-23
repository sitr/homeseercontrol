import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import HsTextStatusDeviceContainer from './container/HsTextStatusDeviceContainer';

class House extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: '',
      };
   }

   componentDidMount() {
      document.title = "Hovedkontroll - status";
   }

   render() {
      return (
         <div className="house_main">
            <div className="building">
               <div class="livingRoom">
                  <HsTextStatusDeviceContainer
                     deviceId="1105"
                     className="temp"/>
                  <HsTextStatusDeviceContainer
                     deviceId="156"
                     className="door terraceDoor"
                     statusType="door"/>
               </div>
               <div class="hallway">
                  <HsTextStatusDeviceContainer
                     deviceId="1387"
                     className="temp"/>   
                  <HsTextStatusDeviceContainer
                     deviceId="25"
                     className="light ceilingLamp"
                     statusType="light"/>
               </div>
               <div class="bathroom">
                  <HsTextStatusDeviceContainer
                     deviceId="553"
                     className="temp"/>
                  <HsTextStatusDeviceContainer
                     deviceId="86"
                     className="light ceilingLamp"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="10"
                     className="light mirrorLamp"
                     statusType="light"/>
               </div>
               <div class="office">
                  <HsTextStatusDeviceContainer
                     deviceId="42"
                     className="temp"/>
                  <HsTextStatusDeviceContainer
                     deviceId="474"
                     className="window"
                     statusType="window"/>
                  <HsTextStatusDeviceContainer
                     deviceId="640"
                     className="light ceilingLamp"
                     statusType="light"/>
               </div>
               <div class="masterBedroom">
                  <HsTextStatusDeviceContainer
                     deviceId="141"
                     className="window"
                     statusType="window"/>
                  <HsTextStatusDeviceContainer
                     deviceId="139"
                     className="door terraceDoor"
                     statusType="door"/>
                  <HsTextStatusDeviceContainer
                     deviceId="646"
                     className="light ceilingLamp"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="650"
                     className="light bedLampIL"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="652"
                     className="light bedLampS"
                     statusType="light"/>
               </div>
            </div>
            
            <div className="keypad">
               <Link to='/'>
                     <button className="button__navigation">Hovedside</button>
               </Link>
            </div>
         </div>
      );
   }
}

export default House;