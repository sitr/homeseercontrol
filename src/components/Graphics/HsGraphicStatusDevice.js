import React from "react";
import { getConfig } from '../../config';

const HsGraphicStatusDevice = (props) => {
   var imageUrl = 'http://' + getConfig().homeseerApiHost + props.device.status;
   return (
      <img src={ imageUrl } id={props.device.ref} className={props.className} alt='bilde'/>
   )
};
export default HsGraphicStatusDevice;