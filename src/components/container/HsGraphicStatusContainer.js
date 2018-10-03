import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsGraphicStatusDevice from '../presentational/HsGraphicStatusDevice';

class HsGraphicStatusContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className
      };
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               self.setState({'device': result});
         })}
         , 1000);
   }

   componentWillUnmount() {
      if (this.client != null) {
         this.client.unsubscribe(this.homeSeerChannel);
         this.client.disconnect();
         this.client = null
       }
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