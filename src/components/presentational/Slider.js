import React from "react";

const Slider = (props) => (
   <input className={props.className} type="range" value={props.sliderValue} min="0" max="100" onChange={props.onChange} />
 );

 export default Slider;