import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import HsTextStatusDeviceContainer from '../components/Text/HsTextStatusDeviceContainer';
import HsGraphicStatusContainer from '../components/Graphics/HsGraphicStatusContainer';

class House extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: '',
      };
   }

   componentDidMount() {
      document.title = "Hovedkontroll - status";
      this._isMounted = true;
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {
      return (
         <div className="house_main">
            <div className="building">
               <div className="livingRoom">
                  <HsTextStatusDeviceContainer
                     deviceId="1105"
                     className="temp"/>
                  <HsTextStatusDeviceContainer
                     deviceId="156"
                     className="door terraceDoor"
                     statusType="door"/>
                  <HsTextStatusDeviceContainer
                     deviceId="19"
                     className="light ceilingLamp"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="209"
                     className="light windowLamp1"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="198"
                     className="light windowLamp2"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1170"
                     className="light floorLamp1"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="22"
                     className="light floorLamp2"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="695"
                     className="light floorLamp3"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1818"
                     className="light tableLamp1"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="17"
                     className="light tableLamp2"
                     statusType="light"/>
                  <HsGraphicStatusContainer
                     deviceId="153"
                     className="battery terraceDoor"
                     statusType="battery"/>
               </div>
               <div className="stairCase">
                  <HsTextStatusDeviceContainer
                     deviceId="196"
                     className="light ceilingLamp"
                     statusType="light"/>
               </div>
               <div className="hallway">
                  <HsTextStatusDeviceContainer
                     deviceId="1387"
                     className="temp"/>   
                  <HsTextStatusDeviceContainer
                     deviceId="25"
                     className="light ceilingLamp"
                     statusType="light"/>
               </div>
               <div className="bathroom">
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
               <div className="office">
                  <HsTextStatusDeviceContainer
                     deviceId="1770"
                     className="temp"/>
                  <HsTextStatusDeviceContainer
                     deviceId="474"
                     className="window"
                     statusType="window"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1455"
                     className="light ceilingLamp"
                     statusType="light"/>
               </div>
               <div className="masterBedroom">
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
                     deviceId="1441"
                     className="light bedLamp1"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="1444"
                     className="light bedLamp2"
                     statusType="light"/>
               </div>
               <div className="kitchen">
               <HsTextStatusDeviceContainer
                     deviceId="76"
                     className="light ceilingLamp"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="6"
                     className="light stripLight1"
                     statusType="light"/>
                  <HsTextStatusDeviceContainer
                     deviceId="6"
                     className="light stripLight2"
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