import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusIcon(props) {
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
        d="M13 4a1 1 0 10-2 0v7H4a1 1 0 100 2h7v7a1 1 0 102 0v-7h7a1 1 0 100-2h-7V4z"
        fill="#757575"
      />
    </Svg>
  )
}

export default PlusIcon
