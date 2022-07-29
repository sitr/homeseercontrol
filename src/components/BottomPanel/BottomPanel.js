import React from 'react';
import Clock from './clock';
import { Link } from "react-router-dom";
import HsButton from '../Buttons/HsButtonContainer';
import LightScenes from '../KeyPanel/LightScenes';

class BottomPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
          };
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }
     render() {
        return(
            <div className="panel raised_outer bottomPanelContainer">
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <div className=" bottomPanel">
                    <Clock className="clock sunken" />
                    <div>
                        <Link to='/'>
                            <button className="button__navigation">Hovedside</button>
                        </Link>
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
                    <button className='button' onClick={this.togglePopup.bind(this)} >Lysscene</button>
                    <HsButton
                        deviceId="87"
                        buttonText="Nattmodus"
                        className="button nightMode"
                        command='{"cmd": "SetValue", "value": "On"}'
                        isLiveButton={true}
                    />
                  </div>
                </div>
                <LightScenes 
                    closePopup={this.togglePopup.bind(this)}
                    className = {this.state.showPopup ? 'visible' : 'hidden'}
                    />
            </div>
        )
    }
}

export default BottomPanel;