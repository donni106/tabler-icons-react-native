import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSthetoscope({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg className="icon icon-tabler icon-tabler-sthetoscope" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><Path d="M8 15a6 6 0 1 0 12 0v-3" /><Path d="M11 3v2" /><Path d="M6 3v2" /><Circle cx={20} cy={10} r={2} /></Svg>;
}
export default IconSthetoscope;