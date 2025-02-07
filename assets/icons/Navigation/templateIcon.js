import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function TemplatesIcon({ isHighlighted = false }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 18V12H8.5V13.9C8.5 14.5075 8.99249 15 9.6 15H15.4C16.0075 15 16.5 14.5075 16.5 13.9V12H21.5V18C21.5 19.1046 20.6046 20 19.5 20H5.5C4.39543 20 3.5 19.1046 3.5 18ZM21.2143 10L19.9144 5.45056C19.6691 4.59195 18.8844 4 17.9914 4H7.0086C6.11564 4 5.33087 4.59196 5.08555 5.45056L3.78571 10H9.4C10.0075 10 10.5 10.4925 10.5 11.1V13H14.5V11.1C14.5 10.4925 14.9925 10 15.6 10H21.2143Z"
        fill={isHighlighted ? colors.black : colors.grey500}  // Farbe abhängig vom Zustand
      />
    </Svg>
  );
}

export default TemplatesIcon;
