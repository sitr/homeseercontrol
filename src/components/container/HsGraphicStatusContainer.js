import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import Faye from 'faye';
import HsGraphicStatusDevice from '../presentational/HsGraphicStatusDevice';
import { getConfig } from '../../config';

class HsGraphicStatusContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className
      };
      this.config = getConfig();
      var proxyURL = this.config.homeseerProxyUrl + ':' + this.config.homeseerProxyPort + '/faye';
      this.client = new Faye.Client(proxyURL);
      this.homeSeerChannel = '/homeseer/statuschange';
   }

   componentDidMount() {
      var self = this;
      getDeviceInfoFromHomeSeer(self.state.deviceId)
         .then(result => {
            self.setState({'device': result});
         });

      this.client.subscribe(this.homeSeerChannel, function (message) {
         var arr = String(message).split(",");
         if (arr[1] === self.state.deviceId) {
            getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               self.setState({'device': result});
            });
         }
      });
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