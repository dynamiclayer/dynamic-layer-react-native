import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function CustomIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 16V6l-8-4v10l8 4zm-8 6V12L4 8v10l8 4z"
        fill={colors.grey500}
        {...props}
      />
    </Svg>
  );
}

export default CustomIcon;
