import Svg, { Path, Circle, Rect } from 'react-native-svg';
import * as React from "react";
function IconCircleSquare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9.5} cy={9.5} r={6.5} /><Rect x={10} y={10} width={11} height={11} rx={2} /></Svg>;
}
export default IconCircleSquare;