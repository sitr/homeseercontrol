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
               <HsTextStatusDeviceContainer deviceId='596' className='artist' statusText={this.state.message} /><br/>
               <label for="trackInfo">Sang:</label><HsTextStatusDeviceContainer id='trackInfo' deviceId='594' className='track' statusText={this.state.message} /><br/>
               <label for="albumInfo">Album:</label><HsTextStatusDeviceContainer id='albumInfo' deviceId='598' className='track' statusText={this.state.message} /><br/>
            </div>
         </div>
      </div>
      )
   }
}

export default Music