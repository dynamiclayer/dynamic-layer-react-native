import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../../src/style";

function HomeIcon({ isHighlighted = false }) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="Iconset/dynamiclayer">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.166 16L20.166 6L12.166 2L12.166 12L20.166 16ZM12.166 22L12.166 12L4.16602 8V18L12.166 22Z"
          fill={isHighlighted ? colors.black : colors.grey500} // Highlight abhängig vom Zustand
        />
      </G>
    </Svg>
  );
}

export default HomeIcon;