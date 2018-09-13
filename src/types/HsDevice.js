export default class HsDevice {
   constructor(deviceData) {
      this.deviceName = deviceData.Devices[0].name;
      this.value = deviceData.Devices[0].value;
      this.status = deviceData.Devices[0].status;
      this.deviceType=deviceData.Devices[0].device_type.Device_Type;
      this.deviceSubType=deviceData.Devices[0].device_type.Device_SubType;
      this.location=deviceData.Devices[0].location;
      this.location2=deviceData.Devices[0].location2;
      this.ref=deviceData.Devices[0].ref;
   }
}