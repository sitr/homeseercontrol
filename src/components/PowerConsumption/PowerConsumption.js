import React, { Component } from 'react';
import { getDeviceInfoFromHomeSeer } from '../HsDeviceController';
import HsTextStatusDeviceContainer from '../Text/HsTextStatusDeviceContainer';

class PowerConumption extends Component {
    controller = new AbortController();
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         deviceId: this.props.deviceId,
    //         device: {},
    //         statusType: this.props.statusType,
    //         className: this.props.className,
    //     };
    //}

    componentDidMount() {
        var self = this;
        // this.interval = setInterval(() => {
        //     getDeviceInfoFromHomeSeer(self.state.deviceId, self.controller)
        //         .then(result => {
        //             self.setState({'device': result});
        //         })
        // }
        // , 1000);
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
                <p className="panel_title">Strømforbruk</p>
                <div className="panel sunken">
                    <table>
                        <tbody>
                            <tr>
                                <td>Forbruk nå:</td>
                                <td>
                                    <HsTextStatusDeviceContainer
                                        deviceId="1985"
                                        statusType="powerConsumption"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Pris nå:</td>
                                <td>
                                    <HsTextStatusDeviceContainer
                                        deviceId="2000"
                                        statusType="powerPrice"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Forbruk hittil:</td>
                                <td>
                                    <HsTextStatusDeviceContainer
                                        deviceId="1987"
                                        statusType="powerCost"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Pris hittil:</td>
                                <td>
                                    <HsTextStatusDeviceContainer
                                        deviceId="1988"
                                        statusType="powerCost"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default PowerConumption;