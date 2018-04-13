import HsTextStatusDeviceContainer from "./components/container/HsTextStatusDeviceContainer";
import React, { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         message: ''
      };
   }
   render() {
      return (
         <div className="App">
            <HsTextStatusDeviceContainer
               deviceId="51"
               statusText={this.state.message}
            />         
         </div>
      );
   }
}

export default App;