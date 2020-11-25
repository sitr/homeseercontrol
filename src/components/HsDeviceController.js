import HsDevice from '../types/HsDevice';
import { getConfig } from '../config';

var config = getConfig();
const HOMESEER_URL =  config.homeseerApiHost;

function getDeviceInfoFromHomeSeer (deviceId) {
   var result = fetch("http://" + HOMESEER_URL + "/JSON?request=getstatus&ref=" + deviceId)
      .then(response => response.json(), deviceId)
      .then(data =>   {
         return new HsDevice(data);
   }, deviceId);
   return result;
}

function setDeviceValue (deviceId, deviceValue) {
   var result = fetch("http://" + HOMESEER_URL + "/JSON?request=controldevicebyvalue&ref=" + deviceId + "&value=" + deviceValue)
      .then(response => response.json())
      .then(data => {
         return data;
      });
   return result;
}

function runEvent (groupName, eventName) {
   var result = fetch("http://" + HOMESEER_URL + "/JSON?request=runevent&group=" + groupName + "&name=" + eventName)
      .then(response => response.json())
      .then(data => {
         return data;
      });
   return result;
}

 export { getDeviceInfoFromHomeSeer, setDeviceValue, runEvent };