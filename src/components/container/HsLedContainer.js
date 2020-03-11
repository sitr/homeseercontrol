import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsLed from '../presentational/HsLed';

class HsLedContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         id: this.props.id,
         className: this.props.className
      };
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               switch(result.status) {
                  case 'On':
                  case 'Tørker':
                  case 'Vasker':
                  case 'Ja':
                     self.setState({'className': 'led led__green'});
                     break;
                  case 'Off':
                  case 'Ferdig':
                  case 'Nei':
                     self.setState({'className': 'led'});
                     break;
                  default: self.setState({'className': 'led'});
               }
         })}
         , 1000);
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