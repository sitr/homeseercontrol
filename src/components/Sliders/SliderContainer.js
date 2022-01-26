import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer, setDeviceValue } from '../HsDeviceController';
import Slider from './Slider';
import { getConfig } from '../../config';

class SliderContainer extends Component {

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
       if(this.state.deviceId) {
          var self = this;
      //    this.interval = setInterval(() => {
             getDeviceInfoFromHomeSeer(self.state.deviceId)
                .then(result => {
                   self.setState({'sliderValue': result.value});
             });
      //       , 500);
       }
   }

   componentWillUnmount() {
      //clearInterval(this.interval);
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