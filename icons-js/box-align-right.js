import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBoxAlignRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-align-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14.248 19.753v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" /><Path d="M9.248 19.753h.01" /><Path d="M4.247 19.753h.011" /><Path d="M4.247 14.752h.011" /><Path d="M4.247 8.752h.011" /><Path d="M4.247 3.752h.011" /><Path d="M9.248 3.752h.01" /></Svg>;
}
export default IconBoxAlignRight;