import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import Slider from './Slider';
import { getConfig } from '../../config';

class SliderContainer extends Component {
   controller = new AbortController();
   constructor(props) {
      super(props);
      this.state = {
         deviceId: this.props.deviceId,
         className: this.props.className,
         sliderValue: 0,
         deviceInterval: this.props.deviceInterval === undefined ? 1000 : eval(this.props.deviceInterval),
         updateInterval: 1000
      };
      this.config = getConfig();
      this.onChange = this.onChange.bind(this);
   }

   componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
         getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
            .then(result => {
               self.setState({'sliderValue': result.value});
         })
       },
      self.state.updateInterval);
      return () => this.controller.abort;
   }

   componentWillUnmount() {
      clearInterval(this.interval);
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