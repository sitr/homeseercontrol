import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsTextStatusDevice from '../presentational/HsTextStatusDevice';

class HsTextStatusDeviceContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
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
      clearInterval(this.interval);
   }

   render() {
      return (
         <HsTextStatusDevice
            device={this.state.device}
            className={this.state.className}
         />
      );
   }
}
export default HsTextStatusDeviceContainer;