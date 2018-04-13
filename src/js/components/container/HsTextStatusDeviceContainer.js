import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../../HsDeviceController';
import Faye from 'faye';
import HsTextStatusDevice from '../presentational/HsTextStatusDevice';
import { getConfig } from '../../../config';

class HsTextStatusDeviceContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {}
      };
      this.config = getConfig();
   }

   componentDidMount() {
      var self = this;
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

   render() {
      return (
         <div>
            <p>Heisann</p>
         <HsTextStatusDevice
            device={this.state.device}
            className="status_message"
         />
         </div>
      );
   }
}
export default HsTextStatusDeviceContainer;