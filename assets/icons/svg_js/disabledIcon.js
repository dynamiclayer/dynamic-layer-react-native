import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function DisabledIcon(props) {
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
        d="M11.135 4.5a1 1 0 011.732 0l8.66 15a1 1 0 01-.865 1.5H3.342a1 1 0 01-.867-1.5l8.66-15z"
        fill="#FFD600"
      />
      <Path
        d="M12.002 11v3"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={12.0015} cy={18} r={1} fill="#000" />
    </Svg>
  )
}

export default DisabledIcon
