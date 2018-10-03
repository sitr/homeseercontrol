import React, { Component } from 'react';
import { runEvent, getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
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

   componentDidMount() {
      if(this.state.deviceId) {
         var self = this;
         this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId)
               .then(result => {
                  self.setState({'device': result});
                  var className = result.status === 'On' ? 'buttonActive' : ''
                  self.setState({'className': className});
            })}
            , 1000);
      }
   }

   componentWillUnmount() {
      clearInterval(this.interval);
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
         case 'SetValue':
            setDeviceValue(this.state.deviceId, parsedCmd.value === 'On' ? '100' : '0');
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