import HsDevice from './HsDevice';
import { getConfig } from '../config';

function getDeviceInfoFromHomeSeer (params) {
   var config = getConfig();
   const HOMESEER_URL =  config.homeseerApiHost;
   var result = fetch("http://" + HOMESEER_URL + "/JSON?request=getstatus&ref=" + params.deviceId)
      .then(response => response.json())
      .then(data => {
         return new HsDevice(data);
   });
   return result;
}

 export { getDeviceInfoFromHomeSeer };