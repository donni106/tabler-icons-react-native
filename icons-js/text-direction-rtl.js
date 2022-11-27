import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTextDirectionRtl({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-direction-rtl" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" /><Path d="M14 15v-11" /><Path d="M10 15v-11" /><Path d="M5 19h14" /><Path d="M7 21l-2 -2l2 -2" /></Svg>;
}
export default IconTextDirectionRtl;