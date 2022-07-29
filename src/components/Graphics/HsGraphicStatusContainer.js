import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsGraphicStatusDevice from './HsGraphicStatusDevice';

class HsGraphicStatusContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 : Function(this.props.deviceInterval),
         updateInterval: 1000
      };
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
            .then(result => {
               self.setState({'device': result});
         })}
         , self.state.updateInterval);
         return () => this.controller.abort;
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   render() {
      return (
         <HsGraphicStatusDevice
            device={this.state.device}
            className={this.state.className}
         />
      );
   }
}
export default HsGraphicStatusContainer