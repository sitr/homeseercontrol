import React from 'react';
import Clock from './clock';
import { Link } from "react-router-dom";
import HsButton from '../Buttons/HsButtonContainer';

class BottomPanel extends React.Component {
    render() {
        return(
            <div className="panel raised_outer bottomPanelContainer">
                <img src="images/bolt1.png" className="bolt" />
                <img src="images/bolt1.png" className="bolt" />
                <img src="images/bolt1.png" className="bolt" />
                <img src="images/bolt1.png" className="bolt" />
                <div className=" bottomPanel">
                    <Clock className="clock sunken" />
                    <div>
                        <Link to='/house'>
                            <button className="button__navigation">Status</button>
                        </Link>
                        <Link to='/outdoor'>
                            <button className="button__navigation">Bil</button>
                        </Link>
                        <Link to='/music'>
                            <button className="button__navigation">Musikk</button>
                        </Link>
                  </div>
                  <div className="nightMode">
                    <HsButton
                        deviceId="87"
                        buttonText="Nattmodus"
                        className="button nightMode"
                        command='{"cmd": "SetValue", "value": "On"}'
                        isLiveButton={true}
                    />
                  </div>
                </div>
            </div>
        )
    }
}

export default BottomPanel;