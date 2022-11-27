import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTopologyStarRing({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-star-ring" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 12h4" /><Path d="M14 12h4" /><Path d="M13.5 5.5l5 5" /><Path d="M5.5 13.5l5 5" /><Path d="M13.5 18.5l5 -5" /><Path d="M10.5 5.5l-5 5" /><Path d="M12 6v4" /><Path d="M12 14v4" /></Svg>;
}
export default IconTopologyStarRing;