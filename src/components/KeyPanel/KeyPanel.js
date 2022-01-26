import React from "react";
import { Link } from "react-router-dom";
import HsButton from '../Buttons/HsButton';

class KeyPanel extends React.Component {

    render() {
        return(
            <div className="container_raised keyPanel">
               <HsButton
                  deviceId="130"
                  buttonText="Normal belysning"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Normal belysning"}'
               />
               <Link to='/music'>
                  <button className="button__navigation">Musikk</button>
               </Link>
               <HsButton
                  deviceId="130"
                  buttonText="Dempet belysning"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Dempet belysning"}'
               />
               <Link to='/outdoor'>
                  <button className="button__navigation">Garasje</button>
               </Link>
               <HsButton
                  deviceId="130"
                  buttonText="Alt lys på"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Full belysning"}'
               />
               <Link to='/house'>
                  <button className="button__navigation">Status</button>
               </Link>

               <HsButton
                  deviceId="130"
                  buttonText="Alt lys av"
                  className="button"
                  command='{"cmd": "SetValue", "value": "Ingen belysning"}'
               />
               <HsButton
                  deviceId="87"
                  buttonText="Nattmodus"
                  className="button nightMode"
                  command='{"cmd": "SetValue", "value": "On"}'
                  isLiveButton={true}
               />
            </div>
        );
    }
}
export default KeyPanel;