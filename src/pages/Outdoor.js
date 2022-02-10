import React, { Component } from 'react';
import BottomPanel from '../components/BottomPanel/BottomPanel';
import HsButtonContainer from '../components/Buttons/HsButtonContainer';

class Outdoor extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: '',
      };
   }

   componentDidMount() {
      document.title = "Hovedkontroll - Bil";
      this._isMounted = true;
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {

      return (
         <React.StrictMode>
            <div className="outdoor_main">
               <div className="panel raised_outer">
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <img src="images/bolt1.png" className="bolt" />
                  <div className="panel raised_inner car1">
                     <p>Oppvarming Kia</p>
                     <HsButtonContainer
                        deviceId="2197"
                        toggleText={["Skru på", "Skru av"]}
                        className=""
                        command='{"cmd": "SetValue", "value": "Motorvarmer på"}'
                        isLiveButton={true}
                     />
                     <HsButtonContainer
                        id="btnDayShift"
                        deviceId="631"
                        buttonText="Dagvakt"
                        className=""
                        command='{"cmd": "SetValue", "value": "Dagvakt"}'
                        isLiveButton={true}
                     />
                     <HsButtonContainer
                        id="btnNightShift"
                        deviceId="631"
                        buttonText="Nattevakt"
                        className=""
                        command='{"cmd": "SetValue", "value": "Nattevakt"}'
                        isLiveButton={true}
                     />
                  </div>
               </div>
               <div></div>
               <BottomPanel />
            </div>
         </React.StrictMode>
      );
   }
}
export default Outdoor;