import React, { Component } from 'react';
import { runEvent, getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import HsButton from '../presentational/HsButton';

class HsButtonContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: this.props.id,
         deviceId: this.props.deviceId,
         className: this.props.className,
         buttonText: this.props.buttonText,
         toggleText: this.props.toggleText,
         command: this.props.command,
         isLiveButton: this.props.isLiveButton === undefined ? false : this.props.isLiveButton
      };
   }

   componentDidMount() {
      if(this.state.deviceId && this.state.isLiveButton) {
         var self = this;
         this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId)
               .then(result => {
                  switch(result.status) {
                     case 'On':
                        self.setState({'className': 'button__activated--blue'});
                        self.setState({'command': '{"cmd": "SetValue", "value": "Off"}'});
                        if(self.state.toggleText)
                           self.setState({'buttonText': self.state.toggleText[1]});
                        break;
                     case 'Off':
                        self.setState({'className': ''});
                        self.setState({'command': '{"cmd": "SetValue", "value": "On"}'});
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
            id={this.state.id}
            className={this.state.className}
            buttonText={this.state.buttonText}
            onClick={this.handleCommand.bind(this)}
         />
      );
   }
}
export default HsButtonContainer;