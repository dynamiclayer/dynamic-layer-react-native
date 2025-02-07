import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../../src/style"

function EyeIcon(props) {
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
        d="M19 14a1 1 0 102 0 9 9 0 10-18 0 1 1 0 102 0 7 7 0 1114 0zm-9-1a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z"
        fill={colors.grey500}
      />
    </Svg>
  )
}

export default EyeIcon
