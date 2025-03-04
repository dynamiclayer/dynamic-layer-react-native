import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlaceholderIcon(props) {
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
        d="M9 5H5v4a1 1 0 01-2 0V4.5A1.5 1.5 0 014.5 3H9a1 1 0 010 2zM5 15a1 1 0 10-2 0v4.5A1.5 1.5 0 004.5 21H9a1 1 0 100-2H5v-4zm9-11a1 1 0 011-1h4.5A1.5 1.5 0 0121 4.5V9a1 1 0 11-2 0V5h-4a1 1 0 01-1-1zm7 11a1 1 0 10-2 0v4h-4a1 1 0 100 2h4.5a1.5 1.5 0 001.5-1.5V15z"
        fill={"#757575"}
        {...props}
      />
    </Svg>
  )
}

export default PlaceholderIcon
