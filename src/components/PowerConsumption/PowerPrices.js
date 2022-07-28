import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer } from '../HsDeviceController';
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';
import LineChart from './LineChart';

class PowerPrices extends Component {
    controller = new AbortController();
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
        this.interval = setInterval(() => {
            getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
                .then(result => {
                    self.setState({'device': result});
                })
        }
        , 1000);
        return () => self.controller.abort;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                <div className="panel sunken">
                    <label>Strømforbruk nå: </label>
                    <HsTextStatusDeviceContainer
                        deviceId="1985"
                        className="value"
                        statusType="powerConsumption"/>
                </div>
            </div>
        );
    }
}
export default PowerPrices;