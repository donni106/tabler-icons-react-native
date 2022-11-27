import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMushroomOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mushroom-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.874 5.89a8.128 8.128 0 0 0 -1.874 5.21a0.9 .9 0 0 0 .9 .9h7.1m4 0h3.1a0.9 .9 0 0 0 .9 -.9c0 -4.474 -3.582 -8.1 -8 -8.1c-1.43 0 -2.774 .38 -3.936 1.047" /><Path d="M10 12v7a2 2 0 1 0 4 0v-5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconMushroomOff;