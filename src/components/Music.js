import HsGraphicStatusContainer from './container/HsGraphicStatusContainer';
import HsTextStatusDeviceContainer from './container/HsTextStatusDeviceContainer';
import HsButtonContainer from './container/HsButtonContainer';
import MediaButtonContainer from './container/MediaButtonContainer';
import React, { Component } from 'react';
import SliderContainer from './container/SliderContainer';
import { getDeviceInfoFromHomeSeer } from '../components/HsDeviceController';

class Music extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: '',
      };
   }

   componentDidMount() {
      document.title = "Hovedkontroll - musikk";
   }

   componentWillUnmount() {
   }

   render() {
      return(
      <div className='main'>
         <div className='container_inset music_info'>
            <HsGraphicStatusContainer deviceId='600' className='music_art' />
            <div className='music_meta'>
               <HsTextStatusDeviceContainer deviceId='596' className='artist' statusText={this.state.message} /><br/>
               <label htmlFor="trackInfo">Sang:</label><HsTextStatusDeviceContainer id='trackInfo' deviceId='594' className='track' statusText={this.state.message} /><br/>
               <label htmlFor="albumInfo">Album:</label><HsTextStatusDeviceContainer id='albumInfo' deviceId='598' className='track' statusText={this.state.message} /><br/>
            </div>
         </div>
         <div className='music_control'>
            <div className="volume_slider">
               <SliderContainer deviceId="621" className="volume_slider__vertical"></SliderContainer>
               <p>Stue</p>
            </div>
            <div className="volume_slider">
               <SliderContainer deviceId="603" className="volume_slider__vertical"></SliderContainer>
               <p>Kjøkken</p>
            </div>
            <div className="volume_slider">
               <SliderContainer deviceId="585" className="volume_slider__vertical"></SliderContainer>
               <p>Bad</p>
            </div>
            <div className="media_buttons">
               <MediaButtonContainer
                  id="btnBackward"
                  deviceId="574"
                  command='{"cmd": "SetValue", "value": "Backward"}'
                  className="btnBackward"
                  buttonText="&#8882;" />
               <MediaButtonContainer
                  id="btnPlay"
                  deviceId="572"
                  command='{"cmd": "SetValue", "value": "Play"}'
                  className="btnPlay"
                  buttonText="&#9658;" />
               <MediaButtonContainer
                  id="btnPause"
                  deviceId="572"
                  command='{"cmd": "SetValue", "value": "Pause"}'

                  className="btnPause"
                  buttonText="&#10074;&#10074;" />
               <MediaButtonContainer
                  id="btnForward"
                  deviceId="574"
                  command='{"cmd": "SetValue", "value": "Forward"}'
                  className="btnForward"
                  buttonText="&#8883;" />
            </div>
         </div>
         <div className="music_system">SONOS</div>
      </div>
      )
   }
}

export default Music