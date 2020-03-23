import React, { Component } from 'react';
import {getDeviceInfoFromHomeSeer} from '../HsDeviceController';
import HsTextStatusDevice from '../presentational/HsTextStatusDevice';

class HsTextStatusDeviceContainer extends Component {

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
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
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
               if (self.props.statusType === 'light')
               {
                  switch(true)
                  {
                     case result.value === 0:
                        self.setState({'className': self.props.className + ' off'});
                        self.setState({'device': ''});
                        break;
                     case result.value > 0 && result.value < 100 :
                        self.setState({'className': self.props.className + ' dim'});
                        self.setState({'device': ''});
                        break;
                        case result.value === 100 :
                           self.setState({'className': self.props.className + ' on'});
                           self.setState({'device': ''});
                           break;
                     default: self.setState({'className': self.props.className + ' off'});
                  }
               }
         })}
         , 1000);
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