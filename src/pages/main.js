import GarbagePlan from '../components/GarbagePlan/GarbagePlan';
import OutdoorConditions from '../components/OutdoorConditions/OutdoorConditions';
import KeyPanel from '../components/KeyPanel/KeyPanel';
import LedPanel from '../components/LedPanel/LedPanel';
import BottomPanel from '../components/BottomPanel/BottomPanel';
import React, { Component } from 'react';
import PowerPrices from '../components/PowerConsumption/PowerPrices';
import IndoorConditions from '../components/IndoorConditions/IndoorConditions';
import PowerConumption from '../components/PowerConsumption/PowerConsumption';
import { Dimensions } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class Main extends Component {
   state = {
      dimensions: {
        window,
        screen
      }
    };

    onChange = ({ window, screen }) => {
      this.setState({ dimensions: { window, screen } });
    };

   componentDidMount() {
      document.title = "Hovedkontroll";
      this.dimensionsSubscription = Dimensions.addEventListener("change", this.onChange);
   }

   componentWillUnmount() {
      this.dimensionsSubscription?.remove();
   }

   render() {
      return (
         <React.StrictMode>
            <div className="main">
               <OutdoorConditions />
               <PowerPrices deviceId="2009"/>
               <PowerConumption />
               <IndoorConditions />
               <GarbagePlan />
               <LedPanel />
               <BottomPanel />
            </div>
         </React.StrictMode>
      );
   }
}

export default Main;