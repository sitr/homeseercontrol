import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsGraphicStatusDevice from './HsGraphicStatusDevice';

class HsGraphicStatusContainer extends Component {
   _isMounted = false;
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
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
                  self.setState({'device': result});
         })}
         , self.state.updateInterval);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
      this._isMounted = false;
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