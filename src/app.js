import GarbagePlan from './components/GarbagePlan/GarbagePlan';
import OutdoorConditions from './components/OutdoorConditions/OutdoorConditions';
import KeyPanel from './components/KeyPanel/KeyPanel';
import LedPanel from './components/LedPanel/LedPanel';
import Clock from './components/clock';
import React, { Component } from 'react';
import PowerConsumption from './components/PowerConsumption/PowerConsumption';
import IndoorConditions from './components/IndoorConditions/IndoorConditions';

class App extends Component {

   componentDidMount() {
      document.title = "Hovedkontroll";
   }

   render() {
      return (
         <React.StrictMode>
            <div className="main">
               <OutdoorConditions />
               <GarbagePlan />
               <KeyPanel />
               <IndoorConditions />
               <PowerConsumption deviceId="2009"/>
               <LedPanel />
               <Clock className="clock" />
            </div>
         </React.StrictMode>
      );
   }
}

export default App;