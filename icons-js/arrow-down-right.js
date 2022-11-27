import Svg, { Path, Line, Polyline } from 'react-native-svg';
import * as React from "react";
function IconArrowDownRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={7} y1={7} x2={17} y2={17} /><Polyline points="17 8 17 17 8 17" /></Svg>;
}
export default IconArrowDownRight;