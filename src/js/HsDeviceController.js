import HsDevice from './HsDevice';
import { getConfig } from '../config';

function getDeviceInfoFromHomeSeer (params) {
   var config = getConfig();
   const URL =  config.homeseerProxyUrl;
   var result = fetch(URL + "/JSON?request=getstatus&ref=" + params.deviceId)
      .then(response => response.json())
      .then(data => {
         return new HsDevice(data);
   });
   return result;
}

 export { getDeviceInfoFromHomeSeer };