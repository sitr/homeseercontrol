import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../../HsDeviceController';
import Faye from 'faye';
import HsButton from '../presentational/HsButton';
import { getConfig } from '../../../config';

class HsTextStatusDeviceContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
         buttonText: this.props.buttonText
      };
      this.config = getConfig();
   }

   componentDidMount() {
      var self = this;
      if(self.state.deviceId) {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               self.setState({'device': result});
            });
         var proxyURL = this.config.homeseerProxyUrl + ':' + this.config.homeseerProxyPort + '/faye';
         var client = new Faye.Client(proxyURL);
         client.subscribe('/homeseer/statuschange', function (message) {
            var arr = String(message).split(",");
            if (parseInt(arr[1]) == self.state.deviceId) {
               getDeviceInfoFromHomeSeer(self.state)
               .then(result => {
                  self.setState({'device': result});
               });
            }
         });
      }
   }

   onClick = (event) => {
      event.target.style
      event.target.classList //to change style via css
   }

   render() {
      return (
         <HsButton
            device={this.state.device}
            className={this.state.className}
            buttonText={this.state.buttonText}
         />
      );
   }
}
export default HsTextStatusDeviceContainer;