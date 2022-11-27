import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconTriangles({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangles" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.974 21h8.052a0.975 .975 0 0 0 .81 -1.517l-4.025 -6.048a0.973 .973 0 0 0 -1.622 0l-4.025 6.048a0.977 .977 0 0 0 .81 1.517z" /><Path d="M4.98 16h14.04c.542 0 .98 -.443 .98 -.989a0.995 .995 0 0 0 -.156 -.534l-7.02 -11.023a0.974 .974 0 0 0 -1.648 0l-7.02 11.023a0.994 .994 0 0 0 .294 1.366a0.973 .973 0 0 0 .53 .157z" /></Svg>;
}
export default IconTriangles;