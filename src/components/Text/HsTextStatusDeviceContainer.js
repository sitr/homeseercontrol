import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsTextStatusDevice from './HsTextStatusDevice';

class HsTextStatusDeviceContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      let interval = Function("return " + this.props.deviceInterval)();
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         statusType: this.props.statusType,
         className: this.props.className,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 :  interval,
         updateInterval: 1000
      };
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
            .then(result => {
               self.setState({'device': result});
               self.setState({'updateInterval': self.state.deviceInterval})
               if(self.props.statusType === 'window' || self.props.statusType === 'door')
               {
                  switch(result.status)
                  {
                     case 'Lukket':
                        self.setState({'className': self.props.className + ' closed'});
                        self.setState({'device': ''});
                        break;
                     case 'Åpent':
                     case 'Åpen':
                        self.setState({'className': self.props.className + ' open'});
                        self.setState({'device': ''});
                        break;
                     default: self.setState({'className': ''});
                     }
               }
               if(self.props.statusType === 'temperature')
               {
                  if (result.value > 0)
                     self.setState({'className': self.props.className + ' temperature_plus'});
                  else
                     self.setState({'className': self.props.className + ' temperature_minus'})
               }
               if(self.props.statusType === 'powerConsumption')
               {
                  if(result.value > 5)
                     self.setState({'className': self.props.className + ' powerConsumptionHigh'});
                  else
                     self.setState({'className': self.props.className + ' powerConsumptionNormal'})
               }
               if (self.props.statusType === 'light')
               {
                  switch(true)
                  {
                     case result.value === 0:
                        self.setState({'className': self.props.className + ' off'});
                        self.setState({'device': ''});
                        break;
                     case result.value > 0 && result.value < 99 :
                        self.setState({'className': self.props.className + ' dim'});
                        self.setState({'device': ''});
                        break;
                        case result.value >= 99 :
                           self.setState({'className': self.props.className + ' on'});
                           self.setState({'device': ''});
                           break;
                     default: self.setState({'className': self.props.className + ' off'});
                  }
               }
         })}
         , self.state.updateInterval);
         return () => this.controller.abort;
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   render() {
      return (
         <HsTextStatusDevice
            device={this.state.device}
            className={this.state.className}
         />
      );
   }
}
export default HsTextStatusDeviceContainer;