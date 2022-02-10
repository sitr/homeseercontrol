import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsTextStatusDevice from './HsTextStatusDevice';

class HsTextStatusDeviceContainer extends Component {
   _isMounted = false;
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         device: {},
         statusType: this.props.statusType,
         className: this.props.className,
      };
   }

   componentDidMount() {
      var self = this;
      self._isMounted = true;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               if(self._isMounted) {
                  self.setState({'device': result});
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
               }
         })}
         , 1000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
      this._isMounted = false;
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