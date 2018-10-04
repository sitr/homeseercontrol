import React, { Component } from 'react';
import { runEvent, getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import HsButton from '../presentational/HsButton';
import { getConfig } from '../../config';

class HsButtonContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
         buttonText: this.props.buttonText,
         command: this.props.command,
         isLiveButton: this.props.isLiveButton === undefined ? false : this.props.isLiveButton
      };
      this.config = getConfig();
      this.handleCommand = this.handleCommand.bind(this);
   }

   componentDidMount() {
      if(this.state.deviceId && this.state.isLiveButton) {
         var self = this;
         this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId)
               .then(result => {
                  self.setState({'device': result});
                  var className = result.status === 'On' ? 'buttonActive' : '';
                  self.setState({'className': className});
            })}
            , 1000);
      }
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   handleCommand = (event) => {
      var parsedCmd = JSON.parse(this.state.command);
      switch(parsedCmd.cmd)
      {
         case 'Event':
            runEvent(parsedCmd.groupName, parsedCmd.eventName);
            break;
         case 'SetValue':
            var cmd = '';
            switch (parsedCmd.value) {
               case 'On':
                  cmd = '100';
                  break;
               case 'Off':
                  cmd = '0';
                  break;
               case 'Play':
                  cmd = '1001';
                  break;
               case 'Pause':
                  cmd = '1000'
                  break;
            }
            setDeviceValue(this.state.deviceId, cmd);
            break;
         default:
            break;
      }
   }

   render() {
      return (
         <HsButton
            device={this.state.device}
            className={this.state.className}
            buttonText={this.state.buttonText}
            onClick={this.handleCommand}
         />
      );
   }
}
export default HsButtonContainer;