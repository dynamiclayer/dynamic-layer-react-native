import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OrIcon(props) {
  return (
    <Svg
      width={343}
      height={24}
      viewBox="0 0 343 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 12h147.5" stroke="#E2E2E2" />
      <Path
        d="M168.523 18.182c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.9-1.387-1.573-.329-.675-.494-1.463-.494-2.364 0-.91.165-1.703.494-2.38.334-.679.796-1.205 1.387-1.58.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.386 1.58.334.677.5 1.47.5 2.38 0 .901-.166 1.69-.5 2.364a3.763 3.763 0 01-1.386 1.573c-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46.386-.307.672-.71.858-1.21.186-.5.278-1.042.278-1.625 0-.584-.092-1.127-.278-1.63a2.755 2.755 0 00-.858-1.223c-.386-.31-.879-.465-1.477-.465-.599 0-1.091.155-1.478.465-.386.311-.672.718-.857 1.222a4.672 4.672 0 00-.279 1.63c0 .584.093 1.126.279 1.626.185.5.471.903.857 1.21.387.307.879.46 1.478.46zM174.524 18V9.273h1.296v1.318h.091c.159-.432.446-.782.863-1.051a2.544 2.544 0 011.409-.404c.099 0 .222.002.37.006.147.004.259.01.335.017v1.364a4.073 4.073 0 00-.313-.051 3.068 3.068 0 00-.505-.04c-.425 0-.803.089-1.137.267a2.016 2.016 0 00-.784.727 1.964 1.964 0 00-.284 1.051V18h-1.341z"
        fill="#757575"
      />
      <Path d="M195.5 12H343" stroke="#E2E2E2" />
    </Svg>
  )
}

export default OrIcon
