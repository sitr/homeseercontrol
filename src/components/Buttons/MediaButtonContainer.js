import React, { Component } from 'react';
import { runEvent, getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import HsButton from './HsButton';
import { getConfig } from '../../config';

class MediaButtonContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         className: this.props.className,
         buttonText: this.props.buttonText,
         command: this.props.command,
         isPlaying: this.props.isPlaying,
         buttonType: this.props.className
      };
      this.config = getConfig();
      this.handleClick = this.handleClick.bind(this);
   }

   componentDidMount() {
      var self = this;
      var kitchenPlayer = 1468;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(kitchenPlayer)
            .then(result => {
               self.setState({ 'isPlaying': result.status === 'Playing' ? true : false });
            })
      }
         , 1000);
   }

   getClassName() {
      switch (this.state.buttonType) {
         case 'btnPlay':
            return this.state.className + (this.state.isPlaying ? ' hide' : '');
         case 'btnPause':
            return this.state.className + (this.state.isPlaying ? '' : ' hide');
         default:
            return this.state.className;
      }
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   handleClick = (event) => {
      var parsedCmd = JSON.parse(this.state.command);
      switch (parsedCmd.cmd) {
         case 'Event':
            runEvent(parsedCmd.groupName, parsedCmd.eventName);
            break;
         case 'SetValue':
            var cmd = '';
            switch (parsedCmd.value) {
               case 'Play':
                  cmd = '1001';
                  break;
               case 'Pause':
                  cmd = '1003';
                  break;
               case 'Forward':
                  cmd = '1004';
                  break;
               case 'Backward':
                  cmd = '1005';
                  break;
               default:
                  cmd = '';
                  break;
            }
            break;
         default:
            break;
      }
      setDeviceValue(this.state.deviceId, cmd);
   }

   render() {
      return (
         <HsButton
            device={this.state.device}
            className={this.getClassName()}
            buttonText={this.state.buttonText}
            onClick={this.handleClick}
         />
      );
   }
}
export default MediaButtonContainer;