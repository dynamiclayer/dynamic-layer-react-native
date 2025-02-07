import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CamIcon(props) {
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
        d="M2 8v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1h-3.465a1 1 0 01-.832-.445l-1.406-2.11A1 1 0 0014.465 4h-4.93a1 1 0 00-.832.445l-1.406 2.11A1 1 0 016.465 7H3a1 1 0 00-1 1zm10 8a3 3 0 100-6 3 3 0 000 6z"
        fill="#000"
        {...props}
      />
    </Svg>
  )
}

export default CamIcon
