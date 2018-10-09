import React, { Component } from 'react';
import { Link }  from "react-router-dom";
import HsTextStatusDeviceContainer from './container/HsTextStatusDeviceContainer';
import HsLedContainer from './container/HsLedContainer';
import HsButtonContainer from './container/HsButtonContainer';

class Outdoor extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: '',
      };
   }

   render() {

      return (
         <div className="outdoor_main">
            <div className="container_raised" >
               <HsButtonContainer
                  deviceId="571"
                  buttonText="På"
                  className=""
                  command='{"cmd": "SetValue", "value": "On"}'
               />
               <HsLedContainer
                  deviceId="571"
                  className="led"
               />
               <HsButtonContainer
                  deviceId="571"
                  buttonText="Av"
                  className=""
                  command='{"cmd": "SetValue", "value": "Off"}'
               />
               <br/>
               <HsButtonContainer
                  id="btnDayShift"
                  deviceId="631"
                  buttonText="Dagvakt"
                  className=""
                  command='{"cmd": "SetValue", "value": "Dagvakt"}'
                  isLiveButton="true"
               />
               <HsButtonContainer
                  id="btnNightShift"
                  deviceId="631"
                  buttonText="Nattevakt"
                  className=""
                  command='{"cmd": "SetValue", "value": "Nattevakt"}'
                  isLiveButton="true"
               />
            </div>
            <div className="music_system">MOTORVARMER</div>
            <div>
               <Link to='/'>
                     <button className="button__navigation">Hovedside</button>
                  </Link>
            </div>
         </div>
      );
   }
}
export default Outdoor;