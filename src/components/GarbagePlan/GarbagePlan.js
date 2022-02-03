import React from 'react';
import HsTextStatusDeviceContainer from '..//Text/HsTextStatusDeviceContainer';

class GarbagePlan extends React.Component {


    render() {
        return (
         <div className="panel raised_outer garbagePlanContainer">
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <img src="images/bolt1.png" className="bolt" />
            <div className="panel sunken garbagePlan">
                  <label>Søppeltømming</label>
                  <div>
                     <img alt="Recycle food waste" src="/images/vesar_epleskrott.png"/>
                     <HsTextStatusDeviceContainer
                        deviceId="1158"
                        className=""
                     />
                  </div>
                  <div>
                     <img alt="Recycle metal and glass" src="/images/vesar_glassmetall.png"/>
                     <HsTextStatusDeviceContainer
                        deviceId="1159"
                        className=""
                     />
                  </div>
                  <div>
                     <img alt="Recycle plastic" src="/images/vesar_plast.png"/>
                     <HsTextStatusDeviceContainer
                        deviceId="1160"
                        className=""
                     />
                  </div>
                  <div>
                     <img alt="Recycle vaste" src="/images/vesar_restavfall.png"/>
                     <HsTextStatusDeviceContainer
                        deviceId="1161"
                        className=""
                     />
                  </div>
                  <div>
                     <img alt="Recycle paper" src="/images/vesar_papir.png"/>
                     <HsTextStatusDeviceContainer
                        deviceId="1162"
                        className=""
                     />
                  </div>
               </div>
            </div>
        )
    }
}
export default GarbagePlan;