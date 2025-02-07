import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackIcon(props) {
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
        d="M15 6l-5.93 5.93a.1.1 0 000 .14L15 18"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        {...props}
      />
    </Svg>
  )
}

export default BackIcon
