import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer } from '../HsDeviceController';
import LineChart from './LineChart';

class PowerConsumption extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            deviceId: this.props.deviceId,
            device: {},
            statusType: this.props.statusType,
            className: this.props.className,
        };
    }

    componentDidMount() {
        var self = this;
        self._isMounted = true;
        this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId)
                .then(result => {
                    if(self._isMounted)
                        self.setState({'device': result});
                })
        }
        , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this._isMounted = false;
    }

    render() {
        return (
            <div className="panel raised_outer powerConsumptionContainer">
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <img src="images/bolt1.png" alt="decorative_bolt" className="bolt" />
                <p className="panel_title">Strømpriser i dag</p>
                <div className="panel sunken">
                    <LineChart
                        device={this.state.device}
                        id={this.state.id}
                        className={this.state.className}
                        deviceInterval = "60 * 60 * 1000"
                    />
                </div>
            </div>
        );
    }
}
export default PowerConsumption;