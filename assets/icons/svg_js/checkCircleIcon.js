import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckCircleIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 21a9 9 0 100-18 9 9 0 000 18zm4.707-10.293a1 1 0 00-1.414-1.414L11.5 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l2.93 2.93a1.1 1.1 0 001.555 0l4.93-4.93z"
        fill="#00B505"
      />
    </Svg>
  )
}

export default CheckCircleIcon
