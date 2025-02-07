import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../../src/style"

function EyeOffIcon(props) {
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
        d="M4 5a1 1 0 011 1 7 7 0 0014 0 1 1 0 112 0 8.958 8.958 0 01-1.56 5.066l2.328 2.794a1 1 0 11-1.536 1.28l-2.115-2.538a9.006 9.006 0 01-2.812 1.772l1.59 3.179a1 1 0 11-1.79.894l-1.772-3.545a9.082 9.082 0 01-2.666 0l-1.773 3.545a1 1 0 11-1.788-.894l1.59-3.18a9.005 9.005 0 01-2.813-1.77L3.768 15.14a1 1 0 11-1.536-1.28l2.328-2.794A8.958 8.958 0 013 6a1 1 0 011-1z"
        fill={colors.grey500}
      />
    </Svg>
  )
}

export default EyeOffIcon
