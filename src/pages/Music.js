import HsGraphicStatusContainer from '../components/Graphics/HsGraphicStatusContainer';
import HsTextStatusDeviceContainer from '../components/Text/HsTextStatusDeviceContainer';
import MediaButtonContainer from '../components/Buttons/MediaButtonContainer';
import React, { Component } from 'react';
import SliderContainer from '../components/Sliders/SliderContainer';
import BottomPanel from '../components/BottomPanel/BottomPanel';
import HsButtonContainer from '../components/Buttons/HsButtonContainer';

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
         <React.StrictMode>
            <div className='music_main'>
               <div className="panel raised_outer music_info">
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <div className="panel sunken">
                     <HsGraphicStatusContainer deviceId='1531' className='music_art' />
                     <div className='music_meta'>
                        <HsTextStatusDeviceContainer deviceId='1527' className='artist' statusText={this.state.message} /><br/>
                        <label htmlFor="trackInfo">Sang:</label><HsTextStatusDeviceContainer id='trackInfo' deviceId='1525' className='track' statusText={this.state.message} /><br/>
                        <label htmlFor="albumInfo">Album:</label><HsTextStatusDeviceContainer id='albumInfo' deviceId='1529' className='track' statusText={this.state.message} /><br/>
                     </div>
                  </div>
                  <div className="radioStations raised_inner">
                  <HsButtonContainer 
                     id="radio_p1"
                     command='{"cmd": "Event", "groupName": "Sonos", "eventName": "Radiostasjon - P1"}'
                     className="btnRadioStation radio_nrkP1"
                     buttonText="" />
                  <HsButtonContainer 
                     id="radio_p3"
                     command='{"cmd": "Event", "groupName": "Sonos", "eventName": "Radiostasjon - P3"}'
                     className="btnRadioStation radio_nrkP3"
                     buttonText="" />
                  <HsButtonContainer 
                     id="radio_p13"
                     command='{"cmd": "Event", "groupName": "Sonos", "eventName": "Radiostasjon - P13"}'
                     className="btnRadioStation radio_nrkP13"
                     buttonText="" />
                  <HsButtonContainer 
                     id="radio_p4"
                     command='{"cmd": "Event", "groupName": "Sonos", "eventName": "Radiostasjon - P4"}'
                     className="btnRadioStation radio_P4"
                     buttonText="" />
               </div>
               </div>
               <div className="panel raised_outer music_control">
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <div className="panel raised_inner">
                     <div className="volume_slider">
                        <SliderContainer deviceId="1534" className="volume_slider__vertical"></SliderContainer>
                        <p>Stue</p>
                     </div>
                     <div className="volume_slider">
                        <SliderContainer deviceId="1498" className="volume_slider__vertical"></SliderContainer>
                        <p>Kjøkken</p>
                     </div>
                     <div className="volume_slider">
                        <SliderContainer deviceId="1480" className="volume_slider__vertical"></SliderContainer>
                        <p>Bad</p>
                     </div>
                     <div className="media_buttons">
                        <MediaButtonContainer
                           id="btnBackward"
                           deviceId="1470"
                           command='{"cmd": "SetValue", "value": "Backward"}'
                           className="btnBackward"
                           buttonText="<" />
                        <MediaButtonContainer
                           id="btnPlay"
                           deviceId="1470"
                           command='{"cmd": "SetValue", "value": "Play"}'
                           className="btnPlay"
                           buttonText="&#9658;" />
                        <MediaButtonContainer
                           id="btnPause"
                           deviceId="1470"
                           command='{"cmd": "SetValue", "value": "Pause"}'
                           className="btnPause"
                           buttonText="&#10074;&#10074;" />
                        <MediaButtonContainer
                           id="btnForward"
                           deviceId="1470"
                           command='{"cmd": "SetValue", "value": "Forward"}'
                           className="btnForward"
                           buttonText=">" />
                     </div>
                  </div>
               </div>
               <div className="page_logo">SONOS</div>
               <BottomPanel />
            </div>
         </React.StrictMode>
      )
   }
}

export default Music