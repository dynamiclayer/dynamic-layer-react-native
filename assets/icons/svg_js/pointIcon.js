import * as React from "react";
import Svg, { Circle } from "react-native-svg";
import { colors } from "../../../src/style";

function PointIcon({ opacity = 1, ...props }) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={6} cy={6} r={4} opacity={opacity} fill={colors.black}/>
    </Svg>
  );
}

export default PointIcon;
