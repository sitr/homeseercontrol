import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsLed from './HsLed';

class HsLedContainer extends Component {
   _isMounted = false;
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
      self._isMounted = true;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               if(self._isMounted)
               {
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
               }
         })}
         , self.state.updateInterval);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
      this._isMounted = false;
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