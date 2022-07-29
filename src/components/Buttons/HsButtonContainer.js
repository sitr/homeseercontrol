import React, { Component } from 'react';
import { runEvent, getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import HsButton from './HsButton';

class HsButtonContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      let interval = Function("return " + this.props.deviceInterval)();
      this.state = {
         id: this.props.id,
         deviceId: this.props.deviceId,
         className: this.props.className,
         buttonText: this.props.buttonText,
         toggleText: this.props.toggleText,
         command: this.props.command,
         isLiveButton: this.props.isLiveButton === undefined ? false : this.props.isLiveButton,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 : interval,
         updateInterval: 1000
      };
   }

   componentDidMount() {
      var self = this;
      if(self.state.deviceId && self.state.isLiveButton) {
         
         this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
               .then(result => {
                  switch(result.status) {
                     case 'On':
                        self.setState({'className': 'button__activated--blue'});
                        self.setState({'command': '{"cmd": "SetValue", "value": "Off"}'});
                        if(result.ref === 2197)
                           self.setState({'command': '{"cmd": "SetValue", "value": "Motorvarmer av"}'});
                        if(self.state.toggleText)
                           self.setState({'buttonText': self.state.toggleText[1]});
                        break;
                     case 'Off':
                        self.setState({'className': ''});
                        self.setState({'command': '{"cmd": "SetValue", "value": "On"}'});
                        if(result.ref === 2197)
                           self.setState({'command': '{"cmd": "SetValue", "value": "Motorvarmer på"}'});
                        if(self.state.toggleText)
                           self.setState({'buttonText': self.state.toggleText[0]});
                        break;
                     case 'Dagvakt':
                        if(self.state.id === 'btnDayShift') {
                           self.setState({'className': 'button__background--orange button__blink--orange'});
                           self.setState({'command': '{"cmd": "SetValue", "value": "Ingen vakt"}'});
                        }
                        break;
                     case 'Nattevakt':
                        if(self.state.id === 'btnNightShift') {
                           self.setState({'className': 'button__background--orange button__blink--orange'});
                           self.setState({'command': '{"cmd": "SetValue", "value": "Ingen vakt"}'});
                        }
                        break;
                     case 'Ingen vakt':
                        self.setState({'className': ''});
                        if(self.state.id === 'btnNightShift')
                           self.setState({'command': '{"cmd": "SetValue", "value": "Nattevakt"}'});
                        if(self.state.id === 'btnDayShift')
                           self.setState({'command': '{"cmd": "SetValue", "value": "Dagvakt"}'});
                        break;
                     default: self.setState({'className': ''});
                  }
            })}
            , self.state.updateInterval);
            return () => self.controller.abort;
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
                  cmd = '1000';
                  break;
               case 'Dagvakt':
                  cmd = '1';
                  break;
               case 'Nattevakt':
                  cmd = '2';
                  break;
               case 'Ingen vakt':
                  cmd = '0';
                  this.setState({'className': ''});
                  break;
               case 'Motorvarmer på':
                  cmd='255'
                  break;
               case 'Motorvarmer av':
                  cmd='0';
                  break;
               case 'Ingen belysning':
                  cmd='101';
                  break;
               case 'Normal belysning':
                  cmd='102';
                  break;
               case 'Litt belysning':
                     cmd='103';
                     break;
               case 'Dempet belysning':
                  cmd='104';
                  break;
               case 'Full belysning':
                  cmd='105';
                  break;
               default:
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
            id={this.state.deviceId}
            className={this.state.className}
            buttonText={this.state.buttonText}
            onClick={this.handleCommand.bind(this)}
         />
      );
   }
}
export default HsButtonContainer;