import HsGraphicStatusContainer from './container/HsGraphicStatusContainer';
import HsTextStatusDeviceContainer from './container/HsTextStatusDeviceContainer';
import React, { Component } from 'react';

class Music extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: ''
      };
   }

   componentDidMount() {
      document.title = "Hovedkontroll - musikk";
   }

   render() {
      return(
      <div className='music_main'>
         <div className='container_inset music_info'>
            <HsGraphicStatusContainer deviceId='600' className='music_art' />
            <div className='music_meta'>
               <HsTextStatusDeviceContainer deviceId='609' className='radio_station' statusText={this.state.message} />
               <HsTextStatusDeviceContainer deviceId='596' className='artist' statusText={this.state.message} />
               <label>Sang: </label><HsTextStatusDeviceContainer deviceId='594' className='track' statusText={this.state.message} />
               <label>Album: </label><HsTextStatusDeviceContainer deviceId='598' className='track' statusText={this.state.message} />
               <HsTextStatusDeviceContainer deviceId='51' className='track' statusText={this.state.message} />
            </div>
         </div>
      </div>
      )
   }
}

export default Music