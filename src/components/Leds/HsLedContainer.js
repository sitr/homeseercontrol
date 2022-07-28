import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsLed from './HsLed';

class HsLedContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         id: this.props.id,
         className: this.props.className,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 : eval(this.props.deviceInterval),
         updateInterval: 1000
      };
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
            .then(result => {
               var mowerCharging = /Charging \(\d{1,}%\)/

               switch(result.status) {
                  case 'On':
                  case 'Tørker':
                  case 'Vasker':
                  case 'Rengjør':
                  case 'Segmentrengjøring':
                  case 'Sonerengjøring':
                  case 'Punktrengjøring':
                  case 'Mowing':
                     self.setState({'className': 'led led__green'});
                     break;

                  case 'Frakoblet lader':
                  case 'Ladeproblem':
                  case 'Feil':
                     self.setState({'className': 'led led__red'});
                     break;

                  case 'Starter opp':
                  case 'Går til ladestasjon':
                  case 'Satt på pause':
                  case 'Oppdaterer firmware':
                  case 'Parkerer i ladestasjon':
                  case 'Går til område':
                     self.setState({'className': 'led led__yellow'});
                     break;
                  
                  case 'Lader':
                  case mowerCharging.test(result.status):
                     self.setState({'className': 'led led__blue'});
                     break;
                  case 'Off':
                  case 'Ferdig':
                     self.setState({'className': 'led'});
                     break;
                  default: self.setState({'className': 'led'});
               }
            }
         )}
         , self.state.updateInterval);
         return () => this.controller.abort;
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   render() {
      return (
         <HsLed
            device={this.state.device}
            id={this.state.id}
            className={this.state.className}
         />
      );
   }
}
export default HsLedContainer