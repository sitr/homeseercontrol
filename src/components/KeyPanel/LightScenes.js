import React from 'react';
import HsButton from '../Buttons/HsButtonContainer';

class LightScenes extends React.Component {
    render() {
        return (
            <div className={`lightScenes ${this.props.className}`}>
                <div className="panel raised_outer keyPanelContainer">
                    <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                    <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                    <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                    <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                    <p className="panel_title">Lysmodus</p>
                    <div className="raised_inner">
                        <button onClick={this.props.closePopup}>Close</button>
                        <HsButton
                            deviceId="130"
                            buttonText="Normal belysning"
                            className="button"
                            command='{"cmd": "SetValue", "value": "Normal belysning"}'
                            deviceInterval = "60 * 1000"
                        />
                        <HsButton
                            deviceId="130"
                            buttonText="Dempet belysning"
                            className="button"
                            command='{"cmd": "SetValue", "value": "Dempet belysning"}'
                            deviceInterval = "60 * 1000"
                        />
                        <HsButton
                            deviceId="130"
                            buttonText="Alt lys på"
                            className="button"
                            command='{"cmd": "SetValue", "value": "Full belysning"}'
                            deviceInterval = "60 * 1000"
                        />
                        <HsButton
                            deviceId="130"
                            buttonText="Alt lys av"
                            className="button"
                            command='{"cmd": "SetValue", "value": "Ingen belysning"}'
                            deviceInterval = "60 * 1000"
                        />
                    </div>
                </div>
            </div>
        );
    }
};
 
export default LightScenes;