import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircuitAmmeter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circuit-ammeter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={7} /><Path d="M5 12h-3" /><Path d="M19 12h3" /><Path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" /><Path d="M14 12h-4" /></Svg>;
}
export default IconCircuitAmmeter;