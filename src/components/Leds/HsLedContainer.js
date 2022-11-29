import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsLed from './HsLed';

class HsLedContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      this._isMounted = false;
      let interval = Function("return " + this.props.deviceInterval)();
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         id: this.props.id,
         className: this.props.className,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 : interval,
         updateInterval: 1000
      };
   }

   componentDidMount() {
      this._isMounted = true
      var self = this;
      this.interval = self._isMounted && setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
            .then(result => {
               var withNoDigits = result.status.replace(/\(\d.\s[m,%]\)/g, '').trimEnd();

               switch(withNoDigits) {
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
                  case 'Fault':
                     self.setState({'className': 'led led__red'});
                     break;

                  case 'Starter opp':
                  case 'Går til ladestasjon':
                  case 'Parkerer i ladestasjon':
                  case 'Går til område':
                  case 'Way home':
                  case 'Searching':
                     self.setState({'className': 'led led__yellow__blink'});
                     break;
                  
                  case 'Parked':
                  case 'Satt på pause':
                     self.setState({'className': 'led led__yellow'});
                     break;

                  case 'Charging':
                  case 'Lader':
                  case 'Oppdaterer firmware':
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
      this._isMounted = false
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