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
               self.setState({'device': result});
         })}
         , 1000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   getClassName() {
      var ledClass = this.state.className;
      switch(this.state.device.status) {
         case 'On':
            ledClass += ' led__green';
            break;
         case 'Dagvakt':
         case 'Nattevakt':
            ledClass += ' led__green'
            break;
         default:
            ledClass = 'led';
            break;
      }
      return ledClass;
   }

   render() {
      return (
         <HsLed
            device={this.state.device}
            id={this.state.id}
            className={this.getClassName()}
         />
      );
   }
}
export default HsLedContainer