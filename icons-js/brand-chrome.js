import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandChrome({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-chrome" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Circle cx={12} cy={12} r={3} /><Path d="M12 9h8.4" /><Path d="M14.598 13.5l-4.2 7.275" /><Path d="M9.402 13.5l-4.2 -7.275" /></Svg>;
}
export default IconBrandChrome;