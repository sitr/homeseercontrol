import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import Slider from './Slider';
import { getConfig } from '../../config';

class SliderContainer extends Component {
   _isMounted = false;
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         className: this.props.className,
         sliderValue: 0
      };
      this.config = getConfig();
      this.onChange = this.onChange.bind(this);
   }

   componentDidMount() {
      var self = this;
      self._isMounted = true;
      if(self.state.deviceId) {
         getDeviceInfoFromHomeSeer(self.state.deviceId)
            .then(result => {
               if(self._isMounted)
                  self.setState({'sliderValue': result.value});
         });
       }
   }

   componentWillUnmount() {
      clearInterval(this.interval);
      this._isMounted = false;
   }

   onChange = (e) => {
      this.setState({ sliderValue: e.target.value });
      setDeviceValue(this.state.deviceId, e.target.value);
   }

   render() {
      return (
         <Slider
            className={this.state.className}
            buttonText={this.state.buttonText}
            onChange={this.onChange}
            sliderValue={this.state.sliderValue}
         />
      );
   }
}
export default SliderContainer;