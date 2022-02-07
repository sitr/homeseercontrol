import React from "react";
import { Link } from "react-router-dom";
import HsButton from '../Buttons/HsButtonContainer';

class KeyPanel extends React.Component {

    render() {
        return(
         <div className="panel raised_outer keyPanelContainer">
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <p class="panel_title">Lysmodus</p>
            <div className="raised_inner keyPanel">
                  <HsButton
                     deviceId="130"
                     buttonText="Normal belysning"
                     className="button"
                     command='{"cmd": "SetValue", "value": "Normal belysning"}'
                  />
                  <HsButton
                     deviceId="130"
                     buttonText="Dempet belysning"
                     className="button"
                     command='{"cmd": "SetValue", "value": "Dempet belysning"}'
                  />
                  <HsButton
                     deviceId="130"
                     buttonText="Alt lys på"
                     className="button"
                     command='{"cmd": "SetValue", "value": "Full belysning"}'
                  />
                  <HsButton
                     deviceId="130"
                     buttonText="Alt lys av"
                     className="button"
                     command='{"cmd": "SetValue", "value": "Ingen belysning"}'
                  />
               </div>
            </div>
        );
    }
}
export default KeyPanel;