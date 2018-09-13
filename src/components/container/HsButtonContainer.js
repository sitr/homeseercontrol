import React, { Component } from 'react';
import { runEvent } from '../HsDeviceController';
import HsButton from '../presentational/HsButton';
import { getConfig } from '../../config';

class HsTextStatusDeviceContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
         buttonText: this.props.buttonText,
         command: this.props.command,
         toggle: true
      };
      this.config = getConfig();
      this.handleCommand = this.handleCommand.bind(this);
   }

   handleCommand = (event) => {
      this.setState((prevState) => ({
         toggle: !prevState.toggle
      }));
      var parsedCmd = JSON.parse(this.state.command);
      switch(parsedCmd.cmd)
      {
         case 'Event':
            runEvent(parsedCmd.groupName, parsedCmd.eventName);
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
export default HsTextStatusDeviceContainer;