import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShareIcon(props) {
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
        d="M11 6.414V15a1 1 0 102 0V6.414l3.293 3.293a1 1 0 001.414-1.414l-4.93-4.93a1.138 1.138 0 00-.036-.035.997.997 0 00-1.482 0 1.048 1.048 0 00-.037.036l-4.93 4.929a1 1 0 001.415 1.414L11 6.414zM4 13a1 1 0 011 1v5h14v-5a1 1 0 112 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a1 1 0 011-1z"
        fill="#000"
        {...props}
      />
    </Svg>
  )
}

export default ShareIcon
