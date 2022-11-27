import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={9} y1={15} x2={15} y2={9} /><Circle cx={9.5} cy={9.5} r={0.5} fill="currentColor" /><Circle cx={14.5} cy={14.5} r={0.5} fill="currentColor" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconDiscount;