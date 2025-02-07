import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatIcon(props) {
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
        d="M4 4a1 1 0 00-1 1v12a1 1 0 001 1h4.586a1 1 0 01.707.293l2 2a1 1 0 001.414 0l2-2a1 1 0 01.707-.293H20a1 1 0 001-1V5a1 1 0 00-1-1H4zm5 6a1 1 0 100 2h6a1 1 0 100-2H9z"
        fill="#000"
        {...props}
      />
    </Svg>
  )
}

export default ChatIcon
