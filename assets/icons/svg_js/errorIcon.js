import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ErrorIcon(props) {
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-5a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 9a1 1 0 100-2 1 1 0 000 2z"
        fill="#FF2C20"
      />
    </Svg>
  )
}

export default ErrorIcon
